import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message = "Hello, World!";
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: 'orange',
    paddingLeft: 80,
    paddingTop: 80,
  },
});
