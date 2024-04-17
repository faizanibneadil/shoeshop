import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
