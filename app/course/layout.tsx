'use client'
import { Inter } from "next/font/google";
import { CourseProvider } from "@/providers/CourseContext";

const inter = Inter({ subsets: ["latin"] });



export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CourseProvider>
            {children}
        </CourseProvider>
        </body>
    </html>
  );
}
