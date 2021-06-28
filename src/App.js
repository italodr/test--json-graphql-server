import { ApolloProvider } from '@apollo/client';

import client from './services/apollo-client';
import Posts from './components/Posts';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Latest posts</h1>
      <Posts />
    </ApolloProvider>
  );
}
