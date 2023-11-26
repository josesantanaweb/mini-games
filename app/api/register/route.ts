
import bcrypt from "bcrypt";

import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstName, lastName, username, password, code } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
      password: hashedPassword,
      code,
    },
  });

  return NextResponse.json(user);
}
