import React from 'react';
import { Image } from 'react-native';
import ovni from '../../../assets/ovni.png'


export function OvniPequeno() {
  return (
      <Image source={ovni} style={{resizeMode: 'contain', height: 80, alignSelf: 'flex-end'}}/>
  );
}