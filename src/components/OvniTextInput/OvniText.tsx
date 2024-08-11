import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './OvniTextStyles';


interface propsOvniTextInput {
  texto: string;

}
export function OvniTextInput(props: propsOvniTextInput) {
  return (
    <View>
      <Text style={styles.text}>{props.texto}</Text>
    </View>
      
  );
}