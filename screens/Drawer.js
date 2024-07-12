import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Drawer = ({ isOpen, onClose }) => {
  return (
    <View style={[styles.container, isOpen ? styles.open : styles.closed, { zIndex: isOpen ? 999 : 0 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Eric Atsu</Text>
        <TouchableOpacity onPress={onClose}>
          
          <View>
            <Image source={require('../assets/images/Close.png')} style={styles.closeButton}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Jewelery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Electronics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  open: {
    transform: [{ translateX: 0 }],
  },
  closed: {
    transform: [{ translateX: -width * 0.8 }],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#888',
  },
  menuItems: {
    flex: 1,
    paddingVertical: 16,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default Drawer;