// "use client";
// 메인페이지를 use client로 설정해놓으면, SSR가 안되니까
// SEO나 렌더링문제에 있을 때 별로 안좋은거맞지?

import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div>
      <h1>Github - 유저검색하기</h1>
      <SearchInput />
      {/* <form action="/api/users/username" method="POST">
        <input name="username" placeholder="유저 이름을 입력하세요" />
        <button type="submit">검색하기</button>
      </form> */}
    </div>
  );
}
