"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Package2 } from "lucide-react";
import Link from "next/link";
import { navigation } from "../_menu";
import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{"{{USER_NAME}}"}</DrawerTitle>
            <DrawerDescription>{"{{USER_EMAIL}}"}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            {navigation.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full text-left",
                })}
              >
                {menu.name}
              </Link>
            ))}
          </div>
          {/* <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Shoe Shop</span>
          </Link>
          {navigation.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className="text-muted-foreground hover:text-foreground"
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default UserMenu;
