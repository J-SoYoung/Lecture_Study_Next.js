import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">LIST</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/list/subpage">About</Link>
        </div>
        <h3> Next.js 스터디 중입니다 </h3>
        {children}
        <div className="footer">
          <span> - 개발 병아리 스터디 - </span>
        </div>
      </body>
    </html>
  );
}
