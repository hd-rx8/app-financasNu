import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


let list = [
  {
    id: 1, 
    label: 'Conta de Luz', 
    value: 'R$ 200,00', 
    date: '17/05/2022', 
    type: 0 // Despesas
  },
  {
    id: 2, 
    label: 'PIX', 
    value: 'R$ 2.500,00', 
    date: '20/05/2022', 
    type: 1 // Entradas 
  },
  {
    id: 3, 
    label: 'Salário', 
    value: 'R$ 7.200,00', 
    date: '22/05/2022', 
    type: 1 // Entradas 
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Hendrix Garcia"/>
        <Balance saldo="12.250,90" gastos="527,00"/>
        <Actions/>
        <Text style={styles.title}>Últimas Movimentações:</Text>
        <FlatList
          data={list}
          style={styles.list}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
