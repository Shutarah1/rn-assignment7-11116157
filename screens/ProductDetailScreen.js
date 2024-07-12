import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = async (product) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.materialsContainer}>
          <Text style={styles.materialsTitle}>MATERIALS</Text>
          <View>
            <Text>We work with monitoring programmes to ensure compliance with 
                safety, health and quality standards for our products
            </Text>
          </View>
          <View style={styles.materialsDetails}>
            <View style ={styles.second}>
            <Image source={require('../assets/images/Do Not Bleach.png')}/>
            <Text style={styles.materialsItem}>Do not use bleach</Text>
            </View>
            <View style ={styles.second}>
            <Image source={require('../assets/images/Do Not Tumble Dry.png')}/>
                <Text style={styles.materialsItem}>Do not tumble dry</Text>
                </View>
                <View style ={styles.second}>
            <Image source={require('../assets/images/Do Not Wash.png')}/>
                <Text style={styles.materialsItem}>Dry clean with tetrachloroethylene</Text>
                </View>
                <View style ={styles.second}>
            <Image source={require('../assets/images/Iron Low Temperature.png')}/>
                <Text style={styles.materialsItem}>Iron at a maximum of 110°C/230°F</Text>
                </View> 
          </View>
        </View>
        <View style={styles.shippingContainer}>
            <View style={styles.third}>
            <Image source={require('../assets/images/Shipping.png')}/>
            <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
            <Image source={require('../assets/images/Down.png')}/>
            </View>
          <Text style={styles.shippingDetails}>Estimated to be delivered on 09/8/2021 - 12/1/2021</Text>
        </View>
      </View>
      <Button style = {styles.addToCartButton} title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
 
second:{
    flexDirection:'row',

},
  materialsContainer: {
    marginVertical: 16,
  },
  materialsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  materialsDetails: {
    marginTop: 8,
  },
  materialsItem: {
    fontSize: 14,
    marginVertical: 4,
  },
  shippingContainer: {
    marginVertical: 16,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shippingDetails: {
    fontSize: 14,
    color: '#888',
  },
  third:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addToCartButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
});

export default ProductDetailScreen;