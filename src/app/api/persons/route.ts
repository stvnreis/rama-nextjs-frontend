import { Api } from "@/app/lib/api";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
  try {
    const {data} = await Api.get('/persons')

    return NextResponse.json(data)
  } catch (err) {
    if(err instanceof AxiosError)
    throw new Error(err.response!.data.message)
  }
}