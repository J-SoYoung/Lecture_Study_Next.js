import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const name = "jung";
  return (
    <div className="home-box">
      <div className="title-box">
        <h1 className="title">CODING FRESH</h1>
        <h4 className="title-sub">developer-{name}</h4>
      </div>
    </div>
  );
}
