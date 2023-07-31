import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import IndexScreen from './mod/screens/IndexScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <IndexScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    margin: 20,
  },
});
