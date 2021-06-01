import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
// interfaces
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
// components
import { FadeInImage } from "./FadeInImage";

const windowWidth = Dimensions.get("window").width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
        {/* Pokemon name & id */}
        <View>
          <Text style={styles.name}>
            {pokemon.name} {"\n#" + pokemon.id}
          </Text>
        </View>
      </View>

      {/* <FadeInImage uri={pokemon.picture} style={{ width: 100, height: 100 }} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "red",
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    left: 10,
  },
});
