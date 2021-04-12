import React from "react";
import { Error } from "../AppText";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Error>{error}</Error>;
}

export default ErrorMessage;

const styles = StyleSheet.create({});
