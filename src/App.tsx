import './App.css';
import Pokedex from './Components/Pokedex';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const authToken = ``;

const client = new ApolloClient({
  uri: "https://social-arachnid-29.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret': `${authToken}`
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Pokedex />
    </div>
    </ApolloProvider>
  );
}

export default App;
