import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req.cookies.get('auth'))

  return NextResponse.json('hello: oi')
}