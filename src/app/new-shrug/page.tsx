"use client";

import styles from "./new-shrug.module.css";
import MainButton from "../components/MainButton";
import RequireWallet from "../components/RequireWallet";
import shrugFeedABI from "../lib/shrugFeedABI.json";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { getSigner } from "../lib/getSigner";
import { ethers } from "ethers";

const ADDRESS = "0x110b3D933766E8D2518499e146477526241f927E"; // contract address

export default function NewShrug() 
{
  const router = useRouter();
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [submitting, setSubmitting] = useState(false);

  function autoGrow(e: any) 
  {
    const element = e.target;
    element.style.height = "5px";
    element.style.height = `${element.scrollHeight}px`;
  }

  async function handlePost() 
  {
    if (!titleRef.current || !contentRef.current) return;

    const title = titleRef.current.value.trim();
    const content = contentRef.current.value.trim();

    if (!title || !content) 
    {
      alert("Title and description are required.");
      return;
    }
    setSubmitting(true);

    // uploading json to pinata and storing cid on chain
    try 
    {
      // upload post json data to pinata
      const res = await fetch("/api/pinata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      
      const { cid } = await res.json();
      if (!cid)
      {
        console.log("Failed to get CID from Pinata")
        throw new Error("Failed to get CID from Pinata");
      }

      // call addPost on smart contract
      const signer = await getSigner();
      const contract = new ethers.Contract(ADDRESS, shrugFeedABI, signer);
      const tx = await contract.addPost(cid);
      
      await tx.wait();
      alert("Post submitted!");
      router.push("/feed");
    } 

    // error while posting
    catch (err) 
    {
      console.error(err);
      alert("Something went wrong while posting.");
    } 

    finally 
    {
      setSubmitting(false);
    }
  }

  return (
    <RequireWallet>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div>
              <textarea
                className={styles.title}
                placeholder="Title"
                onInput={autoGrow}
                ref={titleRef}
              />
            </div>
            <div>
              <textarea
                className={styles.description}
                placeholder="Say something to #feed"
                onInput={autoGrow}
                ref={contentRef}
              />
            </div>
            <p className={styles.metadata}> just now · someone </p>
          </form>
          <div className={styles.postButtonWrapper}>
            <MainButton onClick={handlePost}>
              {submitting ? "Posting..." : "Post"}
            </MainButton>
          </div>
        </main>
      </div>
    </RequireWallet>
  );
}