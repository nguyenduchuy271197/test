import React from "react";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import { MainNav } from "./MainNav";
import TeamSwitcher from "./TeamSwitcher";

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        {/* <TeamSwitcher /> */}
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
