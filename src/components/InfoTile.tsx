import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './shared/AppText';
import colors from '../common/colors';

interface IProps {
  title: string;
  value?: string;
}

const InfoTile: React.FC<IProps> = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <AppText semiBold size={16}>{title}</AppText>
      <AppText>{value}</AppText>
    </View>
  );
}

export default InfoTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey
  }
});
