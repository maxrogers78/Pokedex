import React from "react";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// themes
import { styles } from "../themes/appTheme";
// hooks
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  usePokemonPaginated();

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
