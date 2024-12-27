import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScoreBoard from './components/ScoreBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <ScoreBoard 
        teamA="Tim A"
        teamB="Tim B"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
