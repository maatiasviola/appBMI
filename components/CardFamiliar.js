import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants/theme";

const CardFamiliar = ({ familiar }) => {
  const handlePress = () => {
    console.log("Click");
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={familiar.fotoPerfil} style={styles.profilePic} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{familiar.nombre}</Text>
        <Text style={styles.text}>Edad: {familiar.edad}</Text>
        <Text style={styles.text}>Sangre: ({familiar.sangre})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardFamiliar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  infoContainer: { display: "flex", gap: 2, marginLeft: SIZES.padding },
  title: {
    fontSize: SIZES.h2,
    color: COLORS.darkBlue,
    ...FONTS.h2,
    fontWeight: 700,
  },
  text: { color: COLORS.darkGray, ...FONTS.body3 },
  profilePic: { width: 80, height: 80, borderRadius: 50 },
});
