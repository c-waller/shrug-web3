// landing page

'use client';

import styles from "./page.module.css";
import Link from "next/link";
import MainButton from "./components/MainButton";
import { connectWallet } from "./lib/wallet";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() 
{
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  async function handleConnection() 
  {
    const connected = await connectWallet();
    if (connected) 
    {
      setWalletAddress(connected.address);
      console.log("Connected wallet:", connected.address);
      router.push("/feed");
    }
    else
    {
      alert("MetaMask is not installed.");
    }
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        <h1> ¯\_(ツ)_/¯ Shrug </h1>
      </Link>
      <p className={styles.tagline}>
        A quiet corner of the internet for whatever's on your mind.
      </p>
      <MainButton onClick={handleConnection}> Connect MetaMask </MainButton>
    </div>
  );
}
