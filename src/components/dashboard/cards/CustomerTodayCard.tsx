import { prisma } from "@/lib/prisma";
import OverviewCard from "../OverviewCard";
import { Users } from "lucide-react";

export default async function CustomerTodayCard() {
  const users = await prisma.user.findMany({
    where: {
      Course: {
        slug: "fullstack-web-development-bootcamp",
      },
    },
  });
  return (
    <OverviewCard
      label="Fullstack Bootcamp Customers"
      value={users.length}
      icon={Users}
    />
  );
}
