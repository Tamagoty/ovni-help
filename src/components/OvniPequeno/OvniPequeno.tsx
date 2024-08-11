import React from 'react';
import { Image } from 'react-native';
import ovni from '../../../assets/ovni.png'


export function OvniPequeno() {
  return (
      <Image source={ovni} style={{resizeMode: 'contain', width: 80, height: 80}}/>
  );
}