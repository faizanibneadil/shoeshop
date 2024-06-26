import { buttonVariants } from "@/components/ui/button";
import { Bell, Package2 } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import Header from "./_components/header";
import Navigation from "./_components/navigation";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoe Shop | Admin",
  description: "Manage you'r shoe store hare.",
  manifest: "./manifest.json",
  metadataBase: new URL(process.env.BASE_URL!),
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">Shoe Shop</span>
                </Link>
                <Link
                  href="/notifications"
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className: "ml-auto h-8 w-8",
                  })}
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Link>
              </div>
              <Navigation />
            </div>
          </div>
          <div className="flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
