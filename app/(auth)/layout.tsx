import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoe Shop",
  description: "Authenticate",
  manifest: "./manifest.json",
  metadataBase: new URL(process.env.BASE_URL!),
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="flex items-center justify-center h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
