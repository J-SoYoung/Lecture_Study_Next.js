import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid, 등록된 이메일이 없습니다",
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "Password is invalid, password가 맞지 않습니다",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(404).json({ errorMessage: errors[0] });
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // 등록된 이메일이 없을 때 Error
    if (!userWithEmail) {
      return res
        .status(401)
        .json({
          errorMessage: "회원가입 정보가 없습니다. 이메일을 다시 입력하세요",
        });
    }

    // 해당email과 비밀번호가 맞지 않을 때
    const isMatch = await bcrypt.compare(password, userWithEmail.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({
          errorMessage:
            "Email or Password가 유효하지 않습니다. 다시 입력하세요",
        });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const token = await new jose.SignJWT({ email: userWithEmail.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    return res.status(200).json({ token });
  }
  return res.status(404).json("잘못된 경로입니다");
}
