import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";

import ListItem from "./ListItem";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeperator from "./ListItemSeperator";
import Error from "./AppText";
import AppButton from "./AppButton";
import IconButton from "./IconButton";
import colors from "../config/colors";

import coinMarketDataApi from "../api/coinMarketDataApi";
import useApi from "../Hooks/useApi";

function ItemList(props) {
  const getCoinMarketDataApi = useApi(coinMarketDataApi.getCoinMarketData);

  useEffect(() => {
    getCoinMarketDataApi.request("storm");
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const [coins, setCoins] = useState([]);

  let userInputCoinID = "ada";
  userInputCoinID = userInputCoinID.toLowerCase();

  //Handle to Delete a coin from the list
  const handleDelete = (coin) => {
    setCoins(coins.filter((m) => m.id !== coin.id));
  };

  return (
    <View style={styles.styleContainer}>
      {getCoinMarketDataApi.error && (
        <>
          <Error>Couldn't Retrieve Data</Error>
          <AppButton title="Retry" onPress={loadCoinMarketData} />
        </>
      )}

      <FlatList
        style={{ width: "100%" }}
        data={getCoinMarketDataApi.data}
        keyExtractor={(coin) => coin.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.symbol}
            imageUrl={item.image}
            size={48}
            price={item.current_price}
            oneHour={item.price_change_percentage_1h_in_currency}
            twentyFourHours={item.price_change_percentage_24h_in_currency}
            sevenDays={item.price_change_percentage_7d_in_currency}
            thirtyDays={item.price_change_percentage_30d_in_currency}
            onPress={() => console.log("Item selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setCoins([
            {
              id: 2,
              title: "UNI",
              description: "27.30$",
              image: require("../assets/coins/uni.png"),
            },
          ]);
        }}
      />
      <IconButton iconName={"pluscircle"} iconColor={colors.white} />
      <ActivityIndicator
        animating={getCoinMarketDataApi.loading}
        size="large"
        color={colors.light}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default ItemList;

const styles = StyleSheet.create({
  styleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
