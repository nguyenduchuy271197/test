import { prisma } from "@/lib/prisma";
import OverviewCard from "../OverviewCard";
import { Users } from "lucide-react";

export default async function CustomerCard() {
  const users = await prisma.user.findMany();

  return (
    <OverviewCard label="Total Customers" value={users.length} icon={Users} />
  );
}
