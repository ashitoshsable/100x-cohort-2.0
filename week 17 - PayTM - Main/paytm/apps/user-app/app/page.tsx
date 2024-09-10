import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export default function Home() {
  return (
    <>
    <div className="text-2xl">
      Hello There
    </div>
    </>
  );
}
