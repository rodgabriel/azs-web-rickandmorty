import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, positions, path }) => {
      console.error(message, positions, path);
      return true;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
