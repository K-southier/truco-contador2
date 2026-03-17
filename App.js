import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [play, setPlay] = useState(0);
  const [playTwo, setPlayTwo] = useState(0);
  const [vitoriaPlay, setVitoriaPlay] = useState(0);
  const [vitoriaPlayTwo, setVitoriaPlayTwo] = useState(0);


  function adicionarPonto(pontos) {

    if ((play + pontos) >= 12) {
      setVitoriaPlay(vitoriaPlay + 1);
      setPlay(0)
    } else {
      setPlay(play + pontos)
    }
  }

  function adicionarPontoEles(pontos) {
    if ((playTwo + pontos) >= 12) {
      setVitoriaPlayTwo(vitoriaPlayTwo + 1);
      setPlayTwo(0)
    } else {
      setPlayTwo(playTwo + pontos)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Marcador</Text>


      <View style={{ display: 'flex', flexDirection: 'row', gap: 50, justifyContent: 'center' }}>
        <View>

          <Text style={{ margin: 'auto' }}>NÓS</Text>
          <Text>Vitória: {vitoriaPlay}</Text>

          <Text style={{ margin: 'auto' }}>{play}</Text>

          <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
            <Button onPress={() => adicionarPonto(1)} title='+' />

            <Button onPress={() => setPlay(play - 1)} title='-' /></View>

          <StatusBar style="auto" />

          <Button onPress={() => adicionarPonto(3)} title='TRUCO' />

          <Button onPress={() => adicionarPonto(6)} title='SEIS' />

          <Button onPress={() => adicionarPonto(9)} title='NOVE' />

          <Button onPress={() => adicionarPonto(12)} title='DOZE' />
        </View>






        <View>
          <Text style={{ margin: 'auto' }}>ELES</Text>
          <Text>Vitória:{vitoriaPlayTwo}</Text>
          <Text style={{ margin: 'auto' }}>{playTwo}</Text>

          <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>


            <Button onPress={() => adicionarPontoEles(1)} title='+' />


            <Button onPress={() => setPlayTwo(playTwo - 1)} title='-' /></View>
          <StatusBar style="auto" />

          <Button onPress={() => adicionarPontoEles(3)} title='TRUCO' />

          <Button onPress={() => adicionarPontoEles(6)} title='SEIS' />

          <Button onPress={() => adicionarPontoEles(9)} title='NOVE' />

          <Button onPress={() => adicionarPontoEles(12)} title='DOZE' />
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
