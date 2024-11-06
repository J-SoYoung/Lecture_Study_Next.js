import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, id);
  return <h1>book - {id} </h1>;
}
