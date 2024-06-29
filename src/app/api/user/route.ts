import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

import { User } from "@/interface/User";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const users: User[] = await prisma.user.findMany();

  return Response.json({ users });
}

export async function POST(req: NextRequest) {
  const user: User = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });

  Response.json({ user });
}
