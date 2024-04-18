import { Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { navigation } from "../_menu";

const Navigation: React.FC = () => {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Shoe Shop</span>
      </Link>
      {navigation.map((menu) => (
        <Link
          href={menu.path}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
