import React from 'react';
import { View, Image } from 'react-native';
import ovni from '../../../assets/ovni.png'

import { styles } from './OvniLogoStyles';

export function OvniLogo() {
  return (
    <View style={styles.container}>
      <Image source={ovni}/>
    </View>
  );
}