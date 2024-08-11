import React from 'react';
import { ScrollView, TextInput, View, Text} from 'react-native';
import { styles } from './OvniFormStyles';
import { OvniPequeno } from '../OvniPequeno/OvniPequeno';
import { OvniTextInput } from '../OvniTextInput/OvniText';

export function OvniForm() {
  let texto = 'Solicitar';
  return (
    <ScrollView>
      <View style={styles.viewOvne}>
        <OvniPequeno/>
      </View>
      <View style={styles.viewForm}>
        <TextInput style={styles.textInput} placeholder='Qual a sua graça?'></TextInput>
        <Text style={styles.text}>Telefone</Text>
        <TextInput style={styles.textInput} placeholder='74 9.9999-9999?'></TextInput>
        <Text style={styles.text}>Onde você está? e porque quer ser abduzido?</Text>
        <TextInput style={styles.textInputLong} placeholder='Discorra...'></TextInput>
        <OvniTextInput texto={texto}/>
      </View>
    </ScrollView>
  );
}
