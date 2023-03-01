import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Main from './src/screen/main';

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
