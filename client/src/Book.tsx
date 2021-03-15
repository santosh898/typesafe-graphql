import { useLazyQuery } from "@apollo/client";
import React from "react";
import { useGetBookLazyQuery } from "./queries";

export interface BookProps {
  title: string;
  author: string;
  id: number;
  subtitle: string;
}

const Book: React.FC<BookProps> = ({ id, title, author, subtitle }) => {
  const [getDetails, { loading, data }] = useGetBookLazyQuery();

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
      {!data && !loading ? (
        <button
          style={{
            alignSelf: "center",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() =>
            getDetails({
              variables: {
                bookId: id,
              },
            })
          }
        >
          More
        </button>
      ) : (
        <>
          {loading ? (
            <span
              style={{
                alignSelf: "center",
              }}
            >
              Loading more details....
            </span>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default Book;
