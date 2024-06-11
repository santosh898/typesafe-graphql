import * as bookShelf from "./books.json";
import { Book, Resolvers } from "./types";

const books = bookShelf.books as Book[];

const resolvers: Resolvers = {
  Query: {
    getBooks: (obj, { limit }) => {
      return books.slice(0, limit);
    },
    getBook(obj, { id }) {
      return books.find((book) => book.id === id);
    },
  },
};

export default resolvers;
