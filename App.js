import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance, AppRegistry, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function App() {
  let colorScheme = useColorScheme();

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <View style={styles.container} className={colorScheme}>
          <NavigationContainer>
            <StatusBar style="auto" />
          </NavigationContainer>
          <Header>

          </Header>
        </View>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('BPDApp', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
