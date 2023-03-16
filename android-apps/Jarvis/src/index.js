import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Welcome to Double Lui Cakes</Text>
      <Text style={styles.subheading}>Order delicious cakes for any occasion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default LandingPage;
