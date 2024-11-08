import { ReactNode } from "react";

import SearchableLayout from "@/components/SearchableLayout";
import BookItem from "@/components/BookItem";
import books from "@/mock/books.json";

export default function Page() {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
