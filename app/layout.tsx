import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBarAll from "./DashBoard2/NavBarAll";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "system manager",
  description: " report systems and get information about them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBarAll />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
