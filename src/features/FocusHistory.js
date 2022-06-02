import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View>
      <Text style={styles.title}>Things I've Focused On</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
});
