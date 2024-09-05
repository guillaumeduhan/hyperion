import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_URL = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_API_URL : process.env.STAGING_API_URL;

const headers = {}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/", ""); // /auth/login
  const queryParams = req.nextUrl.search;
  const res = await fetch(`${EXTERNAL_API_URL}/${path}${queryParams}`, {
    method: "GET",
    headers: {
      ...req.headers
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}