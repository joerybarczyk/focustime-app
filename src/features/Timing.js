import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
    </View>
  );
};

export default Timing;

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20,
  },
});
