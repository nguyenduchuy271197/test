"use server";

import { prisma } from "@/lib/prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      include: {
        Course: true,
      },
    });

    const formattedUsers = users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      registration_date: user.registration_date,
      course: user?.Course?.title,
    }));
    return formattedUsers;
  } catch (error) {
    console.log(error);
  }
}
