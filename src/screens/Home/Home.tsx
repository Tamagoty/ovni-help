import React from "react";
import { View } from "react-native";
import { styles } from "./HomeStyles";
import { OvniLogo } from "../../components/OvniLogo/OvniLogo";
import { OvniTextInput } from "../../components/OvniTextInput/OvniText";
import { OvniForm } from "../../components/OvniForm/OvniForm";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={styles.view}>
      <View style={styles.ovniLogo}>
        <OvniLogo />
      </View>
      <View style={styles.textInput}>
        <OvniTextInput />
      </View>
      <View style={styles.form}>
        <OvniForm />
      </View>
      <StatusBar style={"light"}/>
    </View>
  );
}
