import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

import * as Yup from "yup";
import coinIDDataApi from "../api/coinIDDataApi";
import useApi from "../Hooks/useApi";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

/* The reason im defining this outside our function, we dont want our object to get redefined each time our function gets rerendered */

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={styles.backgroundImage}
          source={require("../assets/images/stocksbackground.jpg")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/coincoinlogo.png")}
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("TabNavigator");
          }}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            iconName="mail"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            iconName="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title={"login"} />
        </AppForm>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  backgroundImage: {
    position: "absolute",
    flex: 1,
    width: 1380,
    height: 1035,
    resizeMode: "contain",
  },

  logo: {
    width: 180,
    height: 200,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 100,
  },
});
