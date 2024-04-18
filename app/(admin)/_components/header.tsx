import React from "react";
import MobileMenu from "./mobile-menu";
import SearchForm from "./search-form";
import UserMenu from "./user-menu";

const Header: React.FC = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileMenu />
      <SearchForm />
      <UserMenu />
    </header>
  );
};

export default Header;
