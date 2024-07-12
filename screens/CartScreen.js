import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import Drawer from './Drawer';

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      setCart(cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const removeFromCart = async (product) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Button title="Remove from Cart" onPress={() => removeFromCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.drawerToggle} onPress={toggleDrawer}>
        <Text style={styles.drawerToggleText}>{isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}</Text>
      </TouchableOpacity>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  drawerToggle: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 4,
    alignItems: 'center',
  },
  drawerToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default CartScreen;