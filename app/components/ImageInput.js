import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  //Requesting permission to use media library
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to able permission to access gallery");
  };

  const handlePress = () => {
    console.log("här broder", imageUri);

    if (!imageUri) selectImage();
    else {
      Alert.alert("delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      //If the user doesent cancell
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <AntDesign name={"camera"} size={40} color={colors.dark} />
        )}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imageStyle} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
  },

  imageStyle: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
