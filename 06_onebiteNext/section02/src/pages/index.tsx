import React, { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";

export default function Home() {
  return <h1>index</h1>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
