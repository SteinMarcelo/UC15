import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "../types/Product";
import ProductCard from "../components/ProductCard";

type ProductStackParamList = {
  Product: undefined;
  Details: { item: ProductDTO };
};

type ProductListNavigationProp = NativeStackNavigationProp<
  ProductStackParamList,
  "Product",
  "Details"
>;

const ProductList = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, SetLoading] = useState(true);
  const navigation = useNavigation<ProductListNavigationProp>();

  const fetchData = async () => {
    try {
      const response = await axios.get<ProductDTO[]>(
        "https://fakestoreapi.com/products"
      );
      setData(response.data);
      SetLoading(false);
    } catch (error) {
      console.error("Falha ao buscar dados", error);
      SetLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { item })}
            >
              <ProductCard item={item} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: 10,
    marginRight: 50,
  },
});
