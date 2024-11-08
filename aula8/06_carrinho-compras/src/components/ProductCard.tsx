import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { ProductDTO } from "../types/Product";

interface CardItens {
  item: ProductDTO;
}

const ProductCard = ({ item }: CardItens) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Image
        style={styles.item}
        source={{
          uri: item.image,
        }}
      />
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    width: 250,
    height: 250,
  },
});
