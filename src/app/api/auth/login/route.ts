import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_URL = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_API_URL : process.env.STAGING_API_URL;

export async function POST(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/", "");
  const queryParams = req.nextUrl.search;
  const body = req.json();
  const res = await fetch(`${EXTERNAL_API_URL}/auth/login${queryParams}`, {
    method: "POST",
    headers: {
      ...req.headers
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return NextResponse.json(data);
}