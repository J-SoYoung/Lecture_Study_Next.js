import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // middleware에서 token을 확인하고 있으니 bearerToken의 유효성을 따로 검증할 필요X
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };
  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "인증되지 않은 요청입니다",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      city: true,
      phone: true,
    },
  });

  return res.json({ user });
}
