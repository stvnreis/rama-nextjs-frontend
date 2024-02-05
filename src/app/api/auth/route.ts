import { Api } from "@/app/lib/api";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json()
  const {data} = await axios.post('http://localhost:3333/auth', {
    data: body.data
  })

  return NextResponse.json(data)
}