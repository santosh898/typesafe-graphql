import React, { Suspense, useState } from "react";
import { useGetBookSuspenseQuery } from "./queries";

export interface BookProps {
  title: string;
  author: string;
  id: number;
  subtitle: string;
}

const Book: React.FC<BookProps> = ({ id, title, author, subtitle }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        border: "2px solid teal",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "50%",
      }}
    >
      <h3
        style={{
          margin: 0,
          marginTop: 10,
        }}
      >
        {title}
      </h3>
      <b
        style={{
          margin: 5,
          fontSize: 14,
        }}
      >
        {subtitle}
      </b>
      <p>
        By <b>{author}</b>
      </p>
      {!showMore ? (
        <button
          style={{
            alignSelf: "center",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowMore(true)}
        >
          Load More
        </button>
      ) : (
        <Suspense
          fallback={
            <span
              style={{
                alignSelf: "center",
              }}
            >
              Loading more details....
            </span>
          }
        >
          <MoreDetails bookId={id} />
          <button
            style={{
              alignSelf: "center",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
            onClick={() => setShowMore(false)}
          >
            Less
          </button>
        </Suspense>
      )}
    </div>
  );
};

export default Book;

const MoreDetails: React.FC<{ bookId: number }> = ({ bookId }) => {
  const { error, data } = useGetBookSuspenseQuery({
    variables: {
      bookId,
    },
  });

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }

  return (
    <>
      <p>{data.getBook.description}</p>
      <b>{data.getBook.pages} Pages</b>
      <a
        style={{
          marginTop: 10,
        }}
        target="_blank"
        href={data.getBook.website}
      >
        {data.getBook.website}
      </a>
    </>
  );
};
