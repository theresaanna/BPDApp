import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  let colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <View style={styles.container} className={colorScheme}>
        <NavigationContainer>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
