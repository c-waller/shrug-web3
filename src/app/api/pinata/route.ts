// api route that handles uploading json post data to pinata

import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/app/lib/pinata";

export async function POST(request: NextRequest) 
{
  try 
  {
    const json = await request.json();
    const { cid } = await pinata.upload.public.json(json); // store cid from pinata
    return NextResponse.json({ cid }, { status: 200 });
  } 
  
  catch (err) 
  {
    console.error("Pinata upload error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}