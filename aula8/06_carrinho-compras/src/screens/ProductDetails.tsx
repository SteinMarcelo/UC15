import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params as { item: ProductDTO };
  const { addProduct } = useCartContext();

  return (
    <View>
      <Text>{item.title}</Text>
      <Image
        style={styles.item}
        source={{
          uri: item.image,
        }}
      />
      <Text>{item.description}</Text>
      <Text>Price: ${item.price}</Text>
      <View>
        <TouchableOpacity onPress={() => addProduct(item)}>
          <Text>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    width: 250,
    height: 250,
  },
});
