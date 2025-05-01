import { BrowserProvider } from "ethers";

export async function getSigner()
{
  const provider = new BrowserProvider(window.ethereum);
  return await provider.getSigner();
}