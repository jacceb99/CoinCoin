import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import { H2 } from "./AppText";

function OfflineError(props) {
  return (
    <View style={styles.container}>
      <H2>There is no internet connection.</H2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: "100%",
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OfflineError;
