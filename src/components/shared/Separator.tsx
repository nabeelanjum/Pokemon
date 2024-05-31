import React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import colors from '../../common/colors';

interface IProps {
  color?: ColorValue;
  height?: number;
}

const Separator: React.FC<IProps> = (props) => {

  const { color = colors.lightGrey, height = 1 } = props;

  return (
    <View style={[styles.container, { backgroundColor: color, height }]} />
  );
}

export default Separator;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
});
