import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// This is the HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MyStack')}
      />
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
