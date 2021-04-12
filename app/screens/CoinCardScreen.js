import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import IconButton from "../components/IconButton";
import { H2, H1, H1NB, Title, CoinTitle, H4 } from "../components/AppText";

let item;
function CoinInputScreen({ navigation, route }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (route.params?.pass) {
      item = route.params.pass;
      console.log("HELLO", item);
      setRender(true);
    }
  }, [route.params?.pass]);

  const handleBack = () => {
    //console.log("WatchlistData", coinIDData);
    navigation.navigate("TopListScreen");
  };

  return (
    <View style={styles.container}>
      <IconButton
        iconName={"closecircle"}
        iconColor={colors.white}
        onPress={handleBack}
      />
      {render && (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Image
              style={{
                height: 125,
                width: 125,
              }}
              source={{ uri: item.image }}
            ></Image>
            <View style={{ flex: 1, alignItems: "center", marginTop: 5 }}>
              <CoinTitle>{item.symbol.toUpperCase()}</CoinTitle>
              <H1>{item.id.charAt(0).toUpperCase() + item.id.slice(1)}</H1>
            </View>
          </View>
          {/* INFO */}
          <View
            style={{
              flex: 3,
              backgroundColor: colors.background,
              padding: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
              }}
            >
              {/* Left side info */}
              <View style={{ flex: 1 }}>
                <H1>Price: </H1>
                <H1NB>{item.current_price} $</H1NB>
                <View style={{ marginTop: 10 }}>
                  <H1>Marketcap Rank:</H1>
                  <H1NB>{item.market_cap_rank}</H1NB>
                </View>
                <View style={{ marginTop: 10 }}>
                  <H1>Marketcap: </H1>
                  <H1NB>{item.market_cap} $</H1NB>
                </View>
                <View style={{ marginTop: 10 }}>
                  <H1>All Time High: </H1>
                  <H1NB>{item.ath} $</H1NB>
                </View>
                <View style={{ marginTop: 10 }}>
                  <H1>All Time Low: </H1>
                  <H1NB>{item.atl} $</H1NB>
                </View>
              </View>
              {/* Right side info */}
              <View style={{ flex: 1 }}>
                <H1>Circulating Supply: </H1>
                <H1NB>{item.circulating_supply}</H1NB>
                <View style={{ marginTop: 10 }}>
                  <H1>Max Supply: </H1>
                  <H1NB>{item.max_supply}</H1NB>
                </View>
                <View style={{ marginTop: 10 }}>
                  <H1>24h High: </H1>
                  <H1NB>{item.high_24h} $</H1NB>
                </View>
                <View style={{ marginTop: 10 }}>
                  <H1>24h Low: </H1>
                  <H1NB>{item.low_24h} $</H1NB>
                </View>
              </View>
            </View>
            <View>
              <H4>Last updated : {item.last_updated.substring(11, 19)}</H4>
            </View>
          </View>

          <View style={{ height: 20 }}></View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
  },

  button: {
    width: "100%",
  },
});

export default CoinInputScreen;
