import { JsonRpcSigner } from "ethers";
import { BrowserProvider } from "ethers";

export async function getSigner(): Promise<JsonRpcSigner | undefined>
{
  try
  {
    const provider = new BrowserProvider(window.ethereum);
    return await provider.getSigner();
  }
  catch(err)
  {
    console.error(err);
  }
}