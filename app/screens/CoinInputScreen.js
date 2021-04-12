import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import IconButton from "../components/IconButton";
import coinIDDataApi from "../api/coinIDDataApi";
import useApi from "../Hooks/useApi";

const validationSchema = Yup.object().shape({
  ticker: Yup.string().required().label("Ticker"),
});

function CoinInputScreen({ navigation, route }) {
  const getCoinIDDataApi = useApi(coinIDDataApi.getCoinIDData, false);

  useEffect(() => {
    getCoinIDDataApi.request();
  }, []);

  const coinIDData = getCoinIDDataApi.data;

  const handleBack = () => {
    //console.log("WatchlistData", coinIDData);
    navigation.navigate("WatchlistScreen");
  };
  const handleSubmit = (values) => {
    const userInputCoinID = values.ticker.toLowerCase();
    console.log("User enters: ", userInputCoinID);

    for (let i = 0; i < coinIDData.length; i++) {
      if (
        userInputCoinID === coinIDData[i].id ||
        userInputCoinID === coinIDData[i].symbol
      ) {
        console.log(
          "Name: " + coinIDData[i].id + " " + "Ticker: " + coinIDData[i].symbol
        );

        navigation.navigate("WatchlistScreen", {
          userInput: coinIDData[i].id,
        });
        break;
      } else if (i === coinIDData.length - 1) {
        console.log("That coin does not exist");
        break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 20 }}>
        <IconButton
          iconName={"closecircle"}
          iconColor={colors.white}
          onPress={handleBack}
        />
      </View>
      <View style={{ alignItems: "center", margin: 20 }}>
        <AppForm
          initialValues={{ ticker: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="ticker"
            iconName="linechart"
            placeholder="Write coin ticker or name, eg. BTC"
          />

          <SubmitButton title={"Add"} />
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,

    paddingTop: 10,
    flex: 1,
  },

  button: {
    width: "100%",
  },
});

export default CoinInputScreen;
