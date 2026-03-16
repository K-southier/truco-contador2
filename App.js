import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [play, setPlay] = useState(0);
  const [playTwo, setPlayTwo] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Marcador</Text>

      {/**para mostrar o state */}
      <View style={{display: 'flex', flexDirection: 'row', gap: 50, justifyContent: 'center'}}>
        <View>
          <Text style={{margin:'auto'}}>NÓS</Text>

          <Text style={{margin: 'auto'}}>{play}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
            <Button onPress={() => setPlay(play + 1)} title='+' />
            <Button onPress={() => setPlay(play - 1)} title='-' /></View>
          <StatusBar style="auto" />
        </View>
        <View>
        <Text style={{margin:'auto'}}>ELES</Text>
        <Text style={{margin:'auto'}}>{playTwo}</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
          <Button onPress={() => setPlayTwo(playTwo + 1)} title='+' />
          <Button onPress={() => setPlayTwo(playTwo - 1)} title='-' /></View>
        <StatusBar style="auto" />
      </View>
      </View>
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
