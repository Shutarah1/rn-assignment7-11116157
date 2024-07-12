import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      </View>
      
      <Image source={require('../assets/images/Search.png')} style={styles.searchIcon} />
      
    </View>
    <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>CHECKOUT</Text>
        <View style={styles.underline} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: 'white',
   
  },
  logoContainer: {
    
    alignItems: 'center',
  },

  checkoutContainer: {
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginTop: 4,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});