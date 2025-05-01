// helper function for wallet authentication

import { BrowserProvider } from "ethers";
import { getSigner } from "./getSigner";

export async function connectWallet() 
{
    if (typeof window.ethereum === "undefined") // meta mask not installed
    {
      return null;
    }

    try 
    {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = await getSigner();
      return { signer, address: accounts[0] };
    }

    catch (err) // wallet not connected
    {
      return null;
    }
}