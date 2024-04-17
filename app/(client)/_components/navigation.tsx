import { Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Products
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Categories
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Orders
      </Link>
    </nav>
  );
};

export default Navigation;
