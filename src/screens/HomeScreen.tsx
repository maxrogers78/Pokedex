import React from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// themes
import { styles } from "../themes/appTheme";
// hooks
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isLoading, loadPokemons, simplePokemonList } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require("../assets/pokebola.png")}
        style={styles.pokeballBG}
      />

      {/* 
      <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20 }}>
        Pokedex
      </Text>
      */}

      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.picture }}
            style={{ width: 100, height: 100 }}
          />
        )}
        showsVerticalScrollIndicator={false}
        //~ infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
        }
      />
    </>
  );
};
