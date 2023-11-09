import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { familiares } from "../constants/dummyData";
import CardFamiliar from "../components/CardFamiliar";
import { SIZES } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const Comunidad = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#d5dfeb", "#a7b7ce", "#5f7ba2", "#325484"]}
        style={{ flex: 1 }}
      >
        <FlatList
          style={styles.container}
          data={familiares}
          numColumns={1}
          renderItem={({ item }) => (
            <CardFamiliar key={item.idUsuario} familiar={item} />
          )}
        />
      </LinearGradient>
    </View>
  );
};

export default Comunidad;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
  },
});
