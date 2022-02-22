import 'react-native-gesture-handler';
import React from "react";
import { NativeBaseProvider } from "native-base";
import Navigation from 'navigation'

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Navigation />
    </NativeBaseProvider>
  );
}