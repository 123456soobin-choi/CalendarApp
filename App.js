import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

const client = new ApolloClient({
  url: "exp://192.168.219.106:19000",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
