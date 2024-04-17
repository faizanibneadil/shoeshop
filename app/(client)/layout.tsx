import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MobileMenu from "./_components/mobile-menu";
import Navigation from "./_components/navigation";
import SearchForm from "./_components/search-form";
import UserMenu from "./_components/user-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoe Shop",
  description: "Buy you'r favorite shoes & discounted price.",
  manifest: "./manifest.json",
  metadataBase: new URL(process.env.BASE_URL!),
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <Navigation />
            <MobileMenu />
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <SearchForm />
              <UserMenu />
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
