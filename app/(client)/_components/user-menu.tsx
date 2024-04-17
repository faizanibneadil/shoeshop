import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Package2 } from "lucide-react";
import Link from "next/link";

const UserMenu: React.FC = () => {
  return (
    <Sheet>
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
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            My Orders
          </Link>
          <Link
            href="/admin"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default UserMenu;
