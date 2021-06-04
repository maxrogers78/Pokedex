import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import ImageColors from "react-native-image-colors";
// interfaces
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
// components
import { FadeInImage } from "./FadeInImage";

const windowWidth = Dimensions.get("window").width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState("#fdd131");

  useEffect(() => {
    /*
    ImageColors.getColors("https://i.imgur.com/O3XSdU7.jpg", {
      fallback: "grey",
    }).then((colors) => {
      if (colors.platform === "android") {
        setBgColor(colors.dominant || "grey");
      }
    });
    */
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}
      >
        {/* Pokemon name & id */}
        <View>
          <Text style={styles.name}>
            {pokemon.name} {"\n#" + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokeballContainer}>
          <Image
            source={require("../assets/pokebola-blanca.png")}
            style={styles.pokeball}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    overflow: "hidden",
  },
  pokeball: {
    width: 100,
    height: 100,
    bottom: -25,
    right: -25,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -8,
    bottom: -5,
  },
});
