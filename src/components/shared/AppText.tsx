import React from "react";
import {
  ColorValue,
  StyleSheet,
  Text as RNText,
  TextProps,
} from "react-native";

import colors from "../../common/colors";

interface Props extends TextProps {
  bold?: boolean;
  semiBold?: boolean;
  center?: boolean;
  right?: boolean;
  size?: number;
  color?: ColorValue;
}

const AppText: React.FC<Props> = (props) => {

  const {
    center,
    right,
    style,
    size = 14,
    color = colors.fontPrimary,
    children,
    bold,
    semiBold,
  } = props;

  return (
    <RNText
      {...props}
      style={[
        center && styles.center,
        right && styles.right,
        bold && styles.bold,
        semiBold && styles.semiBold,
        { fontSize: size },
        { color },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  bold: {
    fontWeight: 'bold'
  },
  semiBold: {
    fontWeight: '500',
  },
});

export default AppText;
