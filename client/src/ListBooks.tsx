import React from "react";
import { useGetBooksQuery } from "./queries";
import Book, { BookProps } from "./Book";

const ListBooks: React.FC<{}> = () => {
  const { loading, error, data } = useGetBooksQuery({
    variables: {
      limit: 5,
    },
  });

  if (loading) {
    return <div>Loading....</div>;
  } else if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  const { getBooks: books } = data;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {books.map((book: BookProps) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default ListBooks;
