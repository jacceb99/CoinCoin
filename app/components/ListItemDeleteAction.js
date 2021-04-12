import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.styleContainer}>
        <AntDesign name={"closecircle"} size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  styleContainer: {
    backgroundColor: colors.danger,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
