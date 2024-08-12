import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Keys from './component/keys';
import Mid from './component/mid';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', width: '100%', flex: 1, textAlign: 'center',justifyContent: "center"}}>Hello</Text>
      <Mid />
      <Keys />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});
