import React from "react";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// themes
import { styles } from "../themes/appTheme";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require("../assets/pokebola.png")}
        style={styles.pokeballBG}
      />

      <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
        Pokedex
      </Text>
    </>
  );
};
