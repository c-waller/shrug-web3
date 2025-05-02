// api route for fetching posts by cid from pinata

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: Promise<{ cid: string }> }) 
{
  const { cid } = await context.params;
  const url = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${cid}`;

  try 
  {
    const res = await fetch(url);
    if (res.ok) 
    {
      const json = await res.json();
      return NextResponse.json(json);
    }
  } 

  catch (err)
  {
    console.error("Error fetching CID:", cid, err);
  }
  return NextResponse.json({ error: "Post unavailable" }, { status: 404 });
}