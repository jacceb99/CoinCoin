import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import AppPicker from "../components/AppPicker";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Error from "../components/AppText";
import AppButton from "../components/AppButton";
import IconButton from "../components/IconButton";

import coinMarketDataApi from "../api/coinMarketDataApi";

import useApi from "../Hooks/useApi";

let hasChanged;
let dataUpdate = [];
function WatchlistScreen({ navigation, route }) {
  //DECLARING VARIABLES
  const getCoinMarketDataApi = useApi(coinMarketDataApi.getCoinMarketData);
  //DECLARING STATES
  const [refreshing, setRefreshing] = useState(false);
  const [coinData, setCoinData] = useState([]);

  //CALLING API
  useEffect(() => {
    if (route.params?.userInput) {
      getCoinMarketDataApi.request(route.params.userInput);
    }
  }, [route.params?.userInput]);

  //STORING API
  if (hasChanged !== getCoinMarketDataApi.data[0]) {
    dataUpdate = coinData;
    dataUpdate.push(getCoinMarketDataApi.data[0]);
    setCoinData(dataUpdate);
    //console.log("COINDATISH", coinData);
    hasChanged = getCoinMarketDataApi.data[0];
  }

  //Fick inte det här att fungerar... Därför så sätts en egen array och pushas istället för coinData direkt
  /*
  if (hasChanged !== getCoinMarketDataApi.data[0]) {
    setCoinData((coinData) => [...coinData, getCoinMarketDataApi[0]]);
    console.log("COINDATISH", coinData);
    hasChanged = getCoinMarketDataApi.data[0];
  }*/

  const handleAdd = () => {
    navigation.navigate("CoinInputScreen", navigation);
    console.log(route.params);
  };
  //Sorting array
  const handleSort = (selectedItem) => {
    switch (selectedItem.label) {
      case "Sort by price (Rising)":
        setCoindata(coinData.sort((a, b) => a.current_price - b.current_price));
        break;

      case "Sort by price (Descending)":
        setCoinData(coinData.sort((a, b) => b.current_price - a.current_price));
        break;

      case "Sort by 1h price difference (Rising)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              a.price_change_percentage_1h_in_currency -
              b.price_change_percentage_1h_in_currency
          )
        );
        break;

      case "Sort by 1h price difference (Descending)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              b.price_change_percentage_1h_in_currency -
              a.price_change_percentage_1h_in_currency
          )
        );
        break;
      case "Sort by 24h price difference (Rising)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              a.price_change_percentage_24h_in_currency -
              b.price_change_percentage_24h_in_currency
          )
        );
        break;

      case "Sort by 24h price difference (Descending)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              b.price_change_percentage_24h_in_currency -
              a.price_change_percentage_24h_in_currency
          )
        );
        break;

      case "Sort by 7d price difference (Rising)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              a.price_change_percentage_7d_in_currency -
              b.price_change_percentage_7d_in_currency
          )
        );
        break;

      case "Sort by 7d price difference (Descending)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              b.price_change_percentage_7d_in_currency -
              a.price_change_percentage_7d_in_currency
          )
        );
        break;

      case "Sort by 30d price difference (Rising)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              a.price_change_percentage_30d_in_currency -
              b.price_change_percentage_30d_in_currency
          )
        );
        break;

      case "Sort by 30d price difference (Descending)":
        setCoinData(
          coinData.sort(
            (a, b) =>
              b.price_change_percentage_30d_in_currency -
              a.price_change_percentage_30d_in_currency
          )
        );
        break;
      default:
        console.log("Picker Switch Defaulted");
    }
  };

  //Handle to Delete a coin from the list
  const handleDelete = (item) => {
    setCoinData(coinData.filter((m) => m.symbol !== item.symbol));
  };

  /* Creating categories for picker */
  const categories = [
    { label: "Sort by price (Rising)", value: 1 },
    { label: "Sort by price (Descending)", value: 2 },
    { label: "Sort by 1h price difference (Rising)", value: 3 },
    { label: "Sort by 1h price difference (Descending)", value: 4 },
    { label: "Sort by 24h price difference (Rising)", value: 5 },
    { label: "Sort by 24h price difference (Descending)", value: 6 },
    { label: "Sort by 7d price difference (Rising)", value: 7 },
    { label: "Sort by 7d price difference (Descending)", value: 8 },
    { label: "Sort by 30d price difference (Rising)", value: 9 },
    { label: "Sort by 30d price difference (Descending)", value: 10 },
  ];

  const [selected, setSelected] = useState(categories[0]);

  console.log("App executed");

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.background,
          flex: 7,
          alignItems: "center",
        }}
      >
        <AppPicker
          items={categories}
          placeholder="category"
          iconName={"barschart"}
          selectedItem={selected}
          onSelectItem={(item) => {
            setSelected(item);
            handleSort(item);
          }}
        />

        <View style={styles.listContainer}>
          {getCoinMarketDataApi.error && (
            <>
              <Error>Couldn't Retrieve Data</Error>
              <AppButton title="Retry" onPress={getCoinMarketDataApi.data} />
              {/*Kan va fel som händer onPress atm */}
            </>
          )}

          <FlatList
            style={{ width: "100%" }}
            data={coinData}
            keyExtractor={(coin) => coin.symbol}
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
                onPress={() =>
                  navigation.navigate("CoinCardScreen2", { pass: item })
                }
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            )}
            ListFooterComponent={
              <IconButton
                iconName={"pluscircle"}
                iconColor={colors.white}
                onPress={handleAdd}
              />
            }
            ListFooterComponentStyle={{
              alignItems: "center",
              paddingBottom: 30,
            }}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {}}
          />

          <ActivityIndicator
            animating={getCoinMarketDataApi.loading}
            size="large"
            color={colors.light}
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 40,
    width: 36,
  },
});

export default WatchlistScreen;
