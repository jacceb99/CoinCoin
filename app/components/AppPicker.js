import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import PickerItem from "./PickerItem";
import { PickerText } from "./AppText";
import AppButton from "./AppButton";
import { color } from "react-native-reanimated";
import IconButton from "./IconButton";

function AppPicker({
  iconName,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.styleContainer}>
          {iconName && (
            <AntDesign
              name={iconName}
              size={20}
              style={{ color: colors.textcolor, marginRight: 10 }}
            />
          )}
          {/*if the selectedItem is defined, render the selectedItem.label otherwise render the placeholder */}
          <PickerText>
            {" "}
            {selectedItem ? selectedItem.label : placeholder}{" "}
          </PickerText>
          <AntDesign
            name={"down"}
            size={20}
            style={{ color: colors.textcolor }}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* Modal visible uses bolean, true = visible, false = invisible */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ backgroundColor: colors.primary, flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <AppButton
              iconColor={colors.light}
              title={"close"}
              onPress={() => setModalVisible(false)}
            />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  styleContainer: {
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    padding: 9,

    alignItems: "center",
  },
});
