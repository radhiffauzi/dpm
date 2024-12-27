import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const ScoreBoard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const updateScore = (team, increment) => {
    if (gameOver) return;

    if (team === 'A') {
      const newScore = scoreA + increment;
      if (newScore >= 0) {
        setScoreA(newScore);
        if (newScore >= 10) {
          setGameOver(true);
          Alert.alert('Permainan Selesai!', `${teamA} Menang!`);
        }
      }
    } else {
      const newScore = scoreB + increment;
      if (newScore >= 0) {
        setScoreB(newScore);
        if (newScore >= 10) {
          setGameOver(true);
          Alert.alert('Permainan Selesai!', `${teamB} Menang!`);
        }
      }
    }
  };

  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => updateScore('A', 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => updateScore('A', -1)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider}>
          <Text style={styles.vs}>VS</Text>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => updateScore('B', 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => updateScore('B', -1)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.resetButton}
        onPress={resetGame}
      >
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 120,
  },
  button: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    marginHorizontal: 20,
  },
  vs: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;