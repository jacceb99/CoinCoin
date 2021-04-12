import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function Title(props) {
  return <Text style={styles.titleStyle}>{props.children}</Text>;
}

function H1(props) {
  return <Text style={styles.h1Style}>{props.children}</Text>;
}

function H1NB(props) {
  return <Text style={styles.H1notboldStyle}>{props.children}</Text>;
}

function H2(props) {
  return <Text style={styles.h2Style}>{props.children}</Text>;
}

function H3(props) {
  return <Text style={styles.h3Style}>{props.children}</Text>;
}

function H4(props) {
  return <Text style={styles.h4Style}>{props.children}</Text>;
}

function Error(props) {
  return <Text style={styles.errorStyle}>{props.children}</Text>;
}

function PickerText(props) {
  return <Text style={styles.pickerStyle}>{props.children}</Text>;
}

function Rank(props) {
  return <Text style={styles.rankStyle}>{props.children}</Text>;
}

function CoinTitle(props) {
  return (
    <Text numberOfLines={1} style={styles.coinTitleStyle}>
      {props.children}
    </Text>
  );
}

function Percent({ value }) {
  let c, p;

  if (value > 0) {
    c = colors.positive;
    p = "+";
  } else {
    c = colors.negative;
    p = null;
  }

  return (
    <Text numberOfLines={1} style={[styles.percentStyle, { color: c }]}>
      {p}
      {value}%
    </Text>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: colors.secondary,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  h1Style: {
    color: colors.textcolor,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
  },

  h2Style: {
    color: colors.textcolor,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },

  h3Style: {
    color: colors.textcolor,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    flex: 1,
  },

  h4Style: {
    fontFamily: "Roboto",
    color: colors.light,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },

  errorStyle: {
    color: colors.danger,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "left",
    marginLeft: 10,
  },

  percentStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    marginTop: 5,
  },
  pickerStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    color: colors.textcolor,
    flex: 1,
  },

  coinTitleStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    color: colors.textcolor,
    flex: 1,
  },

  H1notboldStyle: {
    color: colors.textcolor,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "left",
  },
  rankStyle: {
    color: colors.light,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "left",
  },
});

export {
  Title,
  CoinTitle,
  H1,
  H1NB,
  H2,
  H3,
  H4,
  PickerText,
  Percent,
  Error,
  Rank,
};
