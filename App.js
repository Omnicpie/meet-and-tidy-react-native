import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ROOT_URL } from "./src/config/config";
import Navigation from "./src/navigation";

const client = new ApolloClient({
  uri: `${ROOT_URL}/graphql`,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  </ApolloProvider>
);

export default App;
