"use client";

import styles from "./feed.module.css";
import FeedTag from "../components/FeedTag";
import RequireWallet from "../components/RequireWallet";
import shrugFeedABI from "../lib/shrugFeedABI.json";
import ShrugSkeleton from "../components/ShrugSkeleton";
import { getSigner } from "../lib/getSigner";
import { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import { formatDistanceToNow } from "date-fns";

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
  const [postCount, setPostCount] = useState<number>(0);

  const didRunRef = useRef(false);

  useEffect(() => {
    // DEV STUFF TO PREVENT DOUBLE API CALLS
    if (didRunRef.current) return;
    didRunRef.current = true;
    async function fetchPosts() 
    {
      try 
      {
        // create new contract with user's info
        const signer = await getSigner();
        const contract = new ethers.Contract(
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
          shrugFeedABI,
          signer
        );

        // get post count AND get all posts
        const count = await contract.getPostCount();
        setPostCount(Number(count));
        const postList = await contract.getAllPosts();
        
        if (postList.length === 0) // no posts found
        {
          setPosts([]);
          setLoading(false);
          return;
        }

        // [post1, post2, ..., postx] <- we need postx as its the newest
        const reversed = [...postList].reverse();
        const results: Shrug[] = []; // this will contain the json for the posts in our feed

        for (const post of reversed) 
        {
          try 
          {
            const res = await fetch(`/api/post/${post.cid}`);
            const json = await res.json();
            results.push({
              title: json.title,
              content: json.content,
              timestamp: Number(post.timestamp),
              cid: post.cid,
            });
          } 
          
          catch (err) 
          {
            console.warn("Failed to fetch CID:", post.cid);
            results.push({
              title: "Unavailable",
              content: "This shrug is no longer available.",
              timestamp: Number(post.timestamp),
              cid: post.cid,
            });
          }
          await new Promise((res) => setTimeout(res, 250)); // throttle requests by 250ms
        }
        setPosts(results);
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
    fetchPosts(); // on mount, load posts
  }, []);

  if (loading) // create page skeleton
  {
    return (
      <RequireWallet>
        <div className={styles.container}>
          <main className={styles.main}>
            <FeedTag />
            {Array.from({ length: 6 }).map((_, i) => (
              <ShrugSkeleton key={i} />
            ))}
          </main>
        </div>
      </RequireWallet>
    );
  }

  return (
    <RequireWallet>
      <div className={styles.container}>
        <main className={styles.main}>
          <FeedTag />
          {posts.length === 0 ? (
            <p className={styles.noPostsMessage}>No shrugs have been posted yet.</p>
          ) : (
            posts.map((post, index) => (
              <article className={styles.shrug} key={index}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.description}>
                  {post.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className={styles.metadataContainer}>
                  <p className={styles.metadata}>
                    {formatDistanceToNow(new Date(post.timestamp * 1000), {
                      addSuffix: true,
                    })}{" "}
                    · someone
                  </p>
                </div>
              </article>
            ))
          )}
        </main>
        <footer className={styles.footer}>
          <p className={styles.pageNumber}>
            Viewed { postCount } shrug{postCount !== 1 ? "s" : ""}.
          </p>
        </footer>
      </div>
    </RequireWallet>
  );
}