/*Crie uma aplicação React Native com Expo que permita o cadastro e listagem de contatos.
Contatos possuem nome e telefone. Ela precisará de dois campos para inserção de dados e um
botão para fazer a inserção. No tratamento do evento, faça somente a exibição dos dados
digitados no log, como feito em aula.*/

import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [contatos, setContatos] = useState([])
  const [contador, setContador] = useState(0)
  
  const capturarNome = (lembreteDigitado) => {
    setNome(lembreteDigitado)
  }

  const capturarTelefone = (telefoneDigitado) => {
    setTelefone(telefoneDigitado)
  }

  const adicionarContato = () => {
    setContatos(contatos => {
      setContador(contador + 1)

      let aux = [{key: contador.toString(), valueNome: nome, valueTelefone: telefone}, ...contatos]
      setNome('')
      setTelefone('')
      return aux
    })
  }
  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        <TextInput 
          placeholder='Nome...'
          style={styles.TextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput 
          placeholder='Telefone...'
          style={styles.TextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Button
          disabled={nome.length === 0}
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>
      <FlatList 
        data={contatos}
        renderItem={contato => (
          <View
            style={styles.itemNaLista}>
            <Text>Contato</Text> 
            <Text>Nome: {contato.item.valueNome}</Text>
            <Text>Telefone: {contato.item.valueTelefone}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  TextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});