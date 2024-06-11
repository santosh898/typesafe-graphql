import * as React from "react";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { createRoot } from "react-dom/client";

import App from "./App";

const GRAPHQL_API_URL = "http://localhost:8080/graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_API_URL,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
