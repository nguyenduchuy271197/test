import { Metadata } from "next";
import { Download, Users } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Overview } from "@/components/dashboard/Overview";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { CalendarDateRangePicker } from "@/components/dashboard/CalendarDateRangePicker";
import { prisma } from "@/lib/prisma";
import OverviewCard from "@/components/dashboard/OverviewCard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function getFullstackUsers() {
  const users = await prisma.user.findMany({
    where: {
      Course: {
        slug: "fullstack-web-development-bootcamp",
      },
    },
  });

  return users;
}

async function getTodayUsers() {
  const users = await prisma.user.findMany({
    where: {
      registration_date: {
        gte: new Date(),
      },
    },
  });
  return users;
}

export default async function DashboardPage() {
  const [users, fullstackUsers, todayUsers] = await Promise.all([
    getUsers(),
    getFullstackUsers(),
    getTodayUsers(),
  ]);

  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <OverviewCard
              label="Total Customers"
              value={users.length}
              icon={Users}
            />
            <OverviewCard
              label="Fullstack Customers"
              value={fullstackUsers.length}
              icon={Users}
            />
            <OverviewCard
              label="Today Customers"
              value={todayUsers.length}
              icon={Users}
            />
            <OverviewCard
              label="Fullstack Customers"
              value={fullstackUsers.length}
              icon={Users}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
