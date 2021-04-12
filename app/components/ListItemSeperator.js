import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSeperator() {
  return <View style={styles.styleSeperator}></View>;
}

const styles = StyleSheet.create({
  styleSeperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.seperator,
  },
});

export default ListItemSeperator;
