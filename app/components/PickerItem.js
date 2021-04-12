import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.styleText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  styleText: {
    color: colors.textcolor,
    padding: 20,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },
});

export default PickerItem;
