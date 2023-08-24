import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req: NextRequest, res: NextResponse) {

  const bearerToken = req.headers.get("authorization") as string;
  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({errorMessage:"인증되지 않은 요청입니다. 토큰이 없습니다."}), { status:401}
    )
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return new NextResponse(
      JSON.stringify({errorMessage:"인증되지 않은 요청입니다. 토큰이 없습니다."}), { status:401}
    )
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    // jose로 token이 유효한지 확인한다
    await jose.jwtVerify(token, secret);
  } catch (error) {
    // token이 일치하지 않으면 Error발생
    return new NextResponse(
      JSON.stringify({errorMessage:"인증되지 않은 요청입니다. 토큰이 없습니다."}), { status:401}
    )
  }
}

// middleware를 선택적으로 사용할 수 있다 
export const config = {
  matcher: ["/api/auth/me"],
};
