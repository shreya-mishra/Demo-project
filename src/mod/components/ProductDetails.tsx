import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ProductDetailsType = {
  name: string;
  price: number;
};
const ProductDetails = ({name, price}: ProductDetailsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.gap} />
      <Text style={styles.price}>{price} Rs.</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
    color: 'green',
  },
  gap: {
    width: 150,
  },
});
