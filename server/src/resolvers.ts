import * as bookShelf from "./books.json";
import { Book, Resolvers } from "./types";

const resolvers: Resolvers = {
  Query: {
    getBooks: (obj, { limit }) => {
      return bookShelf.books.slice(0, limit);
    },
    getBook(obj, { id }) {
      return bookShelf.books.find((book: Book) => book.id === id);
    },
  },
};

export default resolvers;
