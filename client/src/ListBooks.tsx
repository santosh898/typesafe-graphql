import React from "react";
import { useGetBooksSuspenseQuery } from "./queries";
import Book from "./Book";

const ListBooks: React.FC<{}> = () => {
  const { error, data } = useGetBooksSuspenseQuery({
    variables: {
      limit: 5,
    },
  });

  if (error) {
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
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default ListBooks;
