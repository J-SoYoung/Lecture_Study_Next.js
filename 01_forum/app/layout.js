import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import ErrorPage from "./error/page";
import LoginBtn from "./components/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DarkModeBtn from "./components/DarkModeBtn";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // 서버컴포넌트에서 사용가능
  const session = await getServerSession(authOptions);
  let res = cookies().get("mode");

  return (
    <html lang="en">
      <body className={res.value == "dark" ? "dark-mode" : ""}>
        <div className="navbar">
          <div className="navbar-left">
            <Link href="/">홈</Link>
            <Link href="/list">LIST</Link>
            <Link href="/write">작성페이지</Link>
          </div>
          <div className="navbar-right">
            {/* <Link href='/register'>로그인 페이지로 이동</Link> */}
            <DarkModeBtn />
            <LoginBtn login={session ? true : false} />
            {session && <p>{session.user.name}❤️</p>}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
