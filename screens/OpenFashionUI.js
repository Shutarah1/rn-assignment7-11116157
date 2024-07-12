import React from 'react';
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OpenFashionUI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../assets/images/Menu.png')} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={require('../assets/images/Search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/shopping bag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    
      <View style={styles.contentContainer}>
  <Text style={styles.storyText}>OUR STORY</Text>
  <View style={styles.iconsContainer}>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={require('../assets/images/Filter.png')} style={styles.iconImage} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={require('../assets/images/Listview.png')} style={styles.iconImage} />
    </TouchableOpacity>
  </View>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIcon: {
    padding: 8,
  },
  logo: {
    maxWidth: 150,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  storyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    paddingHorizontal: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default OpenFashionUI;