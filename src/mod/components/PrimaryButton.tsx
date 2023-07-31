import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type PrimaryButtonType = {
  title: string;
  onPress: () => void;
};

const PrimaryButton = ({title, onPress}: PrimaryButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
