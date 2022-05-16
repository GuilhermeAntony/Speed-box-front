import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import {} from 'react-native-web'
 import Axios from 'axios'
 import { buscarFrete } from "./src/apis/correios"

async function frete(){
  let teste = await buscarFrete("04014", "22270010", "38700204", 2, 1, 27, 9, 15, 21);
} 

export default function App() {
  const [numServico, setNumServico] = useState('')
  const [cepOrigem, setCepOrigem] = useState('')
  const [cepDestino, setCepDestino] = useState('')
  const [pesoObjeto, setpesoObjeto] = useState('')
  const [formatoObjeto, setFormatoObjeto] = useState('')
  const [comprimentoObjeto, setComprimentoObjeto] = useState('')
  const [alturaObjeto, setAlturaObjeto] = useState('')
  const [larguraObjeto, setLarguraObjeto] = useState('')
  const [diametroObjeto, setDiametroObjeto] = useState('')

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" enable>
        <Text style={styles.logo}>SPEED BOX</Text>
        <TextInput
          onChangeText={(text) => setNumServico(text)}
          style={styles.input}
          placeholder="Número do Serviço"
        ></TextInput>
        <TextInput
          onChangeText={(text) => setCepOrigem(text)}
          style={styles.input}
          placeholder="Cep de Origem"
          // onChangeText={setCepOrigem}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setCepDestino(text)}
          style={styles.input}
          placeholder="Cep de Destino"
          // onChangeText={setCepDestino}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setpesoObjeto(text)}
          style={styles.input}
          placeholder="Peso do objeto"
          // onChangeText={setPeso}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setFormatoObjeto(text)}
          style={styles.input}
          placeholder="Formato do objeto"
          // onChangeText={setFormato}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setComprimentoObjeto(text)}
          style={styles.input}
          placeholder="Comprimento do objeto"
          // onChangeText={setComprimento}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setAlturaObjeto(text)}
          style={styles.input}
          placeholder="Altura do objeto"
          //onChangeText={setAltura}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setLarguraObjeto(text)}
          style={styles.input}
          placeholder="Largura do objeto"
          //onChangeText={setLargura}
        ></TextInput>
        <TextInput
          onChangeText={(text) => setDiametroObjeto(text)}
          style={styles.input}
          placeholder="Diâmetro do objeto"
          // onChangeText={setDiametro}
        ></TextInput>

        <TouchableOpacity 
        onPress={()=> frete()}
        style={styles.button} 
        activeOpacity={0.5}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    color: '#694db4',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#3a3b3d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 250,
    backgroundColor: '#c3c5cb',
    color: '#eff8ff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 22,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#694db4',
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
    marginTop: 15
  },
  textButton: {
    color: '#eff8ff'
  }
})
