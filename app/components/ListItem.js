import React from "react";

import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import { H1, H1NB, H2, Percent, Rank } from "../components/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  imageUrl,
  size,
  onPress,
  renderRightActions,
  price,
  oneHour,
  twentyFourHours,
  sevenDays,
  thirtyDays,
  marketCapRank,
}) {
  oneHour = parseFloat(oneHour).toFixed(2);
  twentyFourHours = parseFloat(twentyFourHours).toFixed(2);
  sevenDays = parseFloat(sevenDays).toFixed(2);
  thirtyDays = parseFloat(thirtyDays).toFixed(2);
  title = title.toUpperCase();

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.containerStyle}>
          {/* LEFTSIDE box */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 3,
              marginLeft: 20,
            }}
          >
            {marketCapRank && (
              <View style={{ paddingRight: 20 }}>
                <Rank>{marketCapRank}</Rank>
              </View>
            )}
            {/* IMAGE box */}
            <View style={{ flex: 3 }}>
              {imageUrl && (
                <Image
                  fadeDuration={1000}
                  style={{
                    width: size,
                    height: size,
                    marginRight: 10,
                  }}
                  source={{ uri: imageUrl }}
                />
              )}
            </View>
            {/* Price and title box */}
            <View style={{ flex: 4 }}>
              <H1>{price} $</H1>

              <H1NB>{title}</H1NB>
            </View>
          </View>
          {/* RIGHTSIDE box */}
          <View style={{ flex: 3, flexDirection: "row", paddingRight: 20 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <H2>1h</H2>
              <Percent value={oneHour} />
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <H2>24h</H2>

              <Percent value={twentyFourHours} />
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <H2>7d</H2>

              <Percent value={sevenDays} />
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <H2>30d</H2>

              <Percent value={thirtyDays} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  coinPic: {
    marginLeft: 30,
    marginRight: 10,
  },

  containerStyle: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: colors.secondary,
    alignItems: "center",
  },
});
