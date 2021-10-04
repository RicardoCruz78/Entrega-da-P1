import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'


import EntradaDeDados from './components/EntradaDeDados.js'
import ExibeItens from './components/ExibeItens.js'

export default function App() {

  const [covid, setCovid] = useState([])
  
  const [contadorCovid, setContadorCovid] = useState(0);


  const addCovid = (descricao, fabricante) => {
    setCovid(covid => {
      setContadorCovid(contadorCovid + 1)
      return [{key: contadorCovid + '', descricao: descricao, fabricante: fabricante}, ...covid]
    })

  }

  const limparLista = () => {
    
    setCovid([])
    setContadorCovid(0)
  }

  return (
    <View style = {styles.container}>
      <EntradaDeDados 
        addCovid = {addCovid} 
        limparLista = {limparLista}
      />
      <ExibeItens 
        covids = {covid} 
        chave = {contadorCovid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    marginVertical: 40,
    backgroundColor: '#FFE4B5',
    justifyContent: 'flex-start',
  },
});
