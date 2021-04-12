import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        borderRadius: 50,
        backgroundColor: colors.light,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 20,
          justifyContent: "center",
          alignItems: "center",
          color: colors.textcolor,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {},

  buttonTextStyle: {},
});
