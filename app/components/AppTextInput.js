import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppTextInput({ iconName, ...otherProps }) {
  return (
    <View style={styles.styleContainer}>
      {iconName && (
        <AntDesign
          name={iconName}
          size={20}
          style={{ color: colors.dark, marginRight: 10 }}
        />
      )}
      <TextInput style={styles.styleText} {...otherProps} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  styleContainer: {
    backgroundColor: colors.lightgray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  styleText: {
    color: colors.dark,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },
});
