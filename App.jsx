import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './app/navigation';

const client = new ApolloClient({
  uri: 'https://meet-and-tidy.commit.digital/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
