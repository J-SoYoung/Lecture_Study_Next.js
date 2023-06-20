"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PropsIdType } from "@/util/typeSettings";

export default function FunctButton({ id }: any) {
  let router = useRouter();

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/post/delete?id=${id}`)
      .then((r) => r.json())
      .then((result) => {
        alert(result);
        router.push("/");
        router.refresh();
      });
  };

  return (
    <button className="link-button" onClick={handleClickDelete}>
      삭제
    </button>
  );
}
