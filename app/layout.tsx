import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerNest",
  description: "Find your next career opportunity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
