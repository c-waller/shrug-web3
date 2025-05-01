'use client';

import styles from "./feed.module.css";
import FeedTag from "../components/FeedTag";
import RequireWallet from "../components/RequireWallet";
import shrugFeedABI from "../lib/shrugFeedABI.json";
import { getSigner } from "../lib/getSigner";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { formatDistanceToNow } from "date-fns";

const CONTRACT = "0x110b3D933766E8D2518499e146477526241f927E";
const GATEWAY = process.env.NEXT_PUBLIC_GATEWAY_URL;

type Shrug = 
{
  title: string;
  content: string;
  timestamp: number;
  cid: string;
};

export default function Feed() 
{
  const [posts, setPosts] = useState<Shrug[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() 
    {
      try 
      {
        const signer = await getSigner();
        const contract = new ethers.Contract(CONTRACT, shrugFeedABI, signer);
        const postList = await contract.getAllPosts();

        if (postList.length === 0) // no posts to display
        {
          setPosts([]);
          setLoading(false);
          return;
        }

        // grab last 10 posts (newest first)
        const last10 = [...postList.slice(-10)].reverse();

        const results = await Promise.all(
          last10.map(async (post: any) => {
            try 
            {
              const res = await fetch(`https://${GATEWAY}/ipfs/${post.cid}`);
              const json = await res.json();
              return {
                title: json.title,
                content: json.content,
                timestamp: Number(post.timestamp),
                cid: post.cid,
              };
            } 
            catch (err) 
            {
              console.warn("Failed to fetch CID:", post.cid);
              return {
                title: "Unavailable",
                content: "This post is no longer accessible.",
                timestamp: Number(post.timestamp),
                cid: post.cid,
              };
            }
          })
        );
        setPosts(results.filter(Boolean) as Shrug[]);
      } 
      catch (err) 
      {
        console.error("Error loading posts:", err);
      } 
      finally 
      {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) 
  {
    return (
      <RequireWallet>
        <p className={styles.loading}> Loading posts... </p>
      </RequireWallet>
    );
  }

  return (
    <RequireWallet>
      <div className={styles.container}>
        <main className={styles.main}>
          <FeedTag />
          {posts.map((post, index) => (
            <article className={styles.shrug} key={index}>
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.description}>
                {post.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className={styles.metadataContainer}>
                <p className={styles.metadata}> { formatDistanceToNow(new Date(post.timestamp * 1000), { addSuffix: true }) } · someone </p>
              </div>
            </article>
          ))}
        <div className={styles.spacer}></div>
        </main>
      </div>
    </RequireWallet>
  );
}