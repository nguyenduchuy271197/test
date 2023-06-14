import { columns } from "@/components/user/columns";
import DataTable from "@/components/user/DataTable";
import { getUsers } from "@/services/userService";
import LogoutButton from "@/components/user/LogoutButton";

export default async function Home() {
  const users = await getUsers();
  console.log(users);

  return (
    <div className="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome to LIKELION!
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of users who registered courses!
          </p>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>

      {!users ? (
        <div>No users found!</div>
      ) : (
        <DataTable data={users} columns={columns} />
      )}
    </div>
  );
}
