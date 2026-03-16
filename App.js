import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Marcador</Text>

      {/**para mostrar o state */}
      <Text>{contador}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
        <Button onPress={() => setContador(contador + 1)} title='+' />
        <Button onPress={() => setContador(contador - 1)} title='-' /></View>
      <StatusBar style="auto" />
    </View>
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
