import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export default async function POST(req: NextRequest) {
  const userAndPost = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "cliente@cliente.com.br",
      posts: {
        create: {
          title: "Email sei lá",
          content: "Sei lá tbm",
        },
      },
    },
    include: {
      posts: true,
    },
  });
  Response.json(userAndPost);
}
