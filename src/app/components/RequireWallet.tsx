"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrowserProvider } from "ethers";

type RequireWalletProps = 
{
    children: React.ReactNode;
};

export default function RequireWallet({ children }: RequireWalletProps) 
{
    const [walletConnected, setWalletConnected] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    
    async function checkWallet() 
    {
        if (typeof window.ethereum === "undefined") 
        {
            router.push("/");
            return;
        }
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);

        if (!accounts || accounts.length === 0) 
        {
            router.push("/");
            return
        } 
        else 
        {
            setWalletConnected(true);
        }
        setLoading(false);
    }
    useEffect(() => { checkWallet() });
    return (loading || !walletConnected ) ? null: <> { children } </>;
}