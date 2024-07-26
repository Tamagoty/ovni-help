import React from 'react';
import { Image } from 'react-native';
import ovni from '../../../assets/ovni.png'


export function OvniLogo() {
  return (
      <Image source={ovni} style={{resizeMode: 'contain', height: 350}}/>
  );
}