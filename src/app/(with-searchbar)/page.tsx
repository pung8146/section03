import styles from "./page.module.css";

export default function Home() {
  console.log("브라우저에서는 실행되지 않고 서버에서만 실행됩니다(터미널)");

  const secretKey = "비밀번호를 넣어놔도 서버측에서만 실행됩니다";

  return <div className={styles.page}>인덱스 페이지</div>;
}
