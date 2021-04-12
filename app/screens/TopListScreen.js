import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";

import coinMarketOrderApi from "../api/coinMarketOrderApi";
import useApi from "../Hooks/useApi";

let hasChanged;
function TopListScreen({ navigation, route }) {
  //DECLARING VARIABLES
  const getCoinMarketOrderApi = useApi(coinMarketOrderApi.getCoinMarketOrder);
  //DECLARING STATES
  const [refreshing, setRefreshing] = useState(false);
  const [coinData, setCoinData] = useState([]);

  //CALLING API
  useEffect(() => {
    getCoinMarketOrderApi.request();
  }, []);

  //STORING API
  if (hasChanged !== getCoinMarketOrderApi.data) {
    console.log("List data updated");
    setCoinData(getCoinMarketOrderApi.data);
    //console.log("COINDATISH", coinData);
    hasChanged = getCoinMarketOrderApi.data;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.background,
          flex: 7,
          alignItems: "center",
        }}
      >
        <View style={styles.listContainer}>
          {/* {getCoinMarketDataApi.error && (
              <>
                <Error>Couldn't Retrieve Data</Error>
                <AppButton title="Retry" onPress={loadCoinMarketData.data} />
                
              </>
            )}  
            */}

          <FlatList
            style={{ width: "100%", flexGrow: 1 }}
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
                marketCapRank={item.market_cap_rank}
                onPress={() =>
                  navigation.navigate("CoinCardScreen", { pass: item })
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
              getCoinMarketOrderApi.request();
            }}
          />

          <ActivityIndicator
            animating={getCoinMarketOrderApi.loading}
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
    backgroundColor: colors.background,
  },

  listContainer: {
    width: "100%",
    alignItems: "center",
    flexGrow: 1,
  },

  image: {
    height: 40,
    width: 36,
  },
});

export default TopListScreen;
