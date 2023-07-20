import styles from "./welcome.module.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.image}>
        <Image
          src="/images/site/me.jpg"
          alt="so-young image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm 소영</h1>
      <p>I blog about web-development</p>
      <p>성장을 기록하는 프론트엔드 개발자 정소영블로그입니다.</p>
    </section>
  );
}
