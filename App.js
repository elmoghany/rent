import { StatusBar } from "expo-status-bar";
import {  StyleSheet, 
          Text, 
          View, 
          Image, 
          Platform, 
          TextInput,
        } 
          from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from "./src/modal/color.js";
import Route from "./src/navigation/router.js";
import React from 'react';
import { Button } from 'react-native';
import { Amplify } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
Amplify.configure({...awsconfig,  Analytics: {
    disabled: true,
  }
});


export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForDroid}>
    <StatusBar style="auto" backgroundColor="#fec85c40" />
    {/* <Home/> */}
    <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewForDroid:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: colors.background
  },
})
