"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navList = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/customers",
    label: "Customers",
  },
  {
    href: "#",
    label: "Products",
  },
  {
    href: "#",
    label: "Settings",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navList.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            { "text-muted-foreground": pathname !== item.href }
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
