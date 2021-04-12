import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

function IconButton({ onPress, iconName, iconColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        style={{ marginTop: 20 }}
        name={iconName}
        color={iconColor}
        size={32}
      />
    </TouchableOpacity>
  );
}

export default IconButton;
