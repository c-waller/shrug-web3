import { BrowserProvider } from "ethers";

export async function connectWallet() 
{
    if (typeof window.ethereum === "undefined") 
    {
      console.log("MetaMask not installed");
      return null;
    }
    try 
    {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return { signer, address: accounts[0] };
    } 
    catch (err) 
    {
      console.error("Wallet connection error:", err);
      return null;
    }
}