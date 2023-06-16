import LinkButton from "./components/LinkButton";

export default async function Home() {
  return (
    <div className="title-box">
      <h1>Home입니다</h1>
      <LinkButton url={"/write"}>📒 글작성 페이지로 이동</LinkButton>
      <LinkButton url={"/list"}>🖥️ 게시판 페이지로 이동</LinkButton>
    </div>
  );
}
