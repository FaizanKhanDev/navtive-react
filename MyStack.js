import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// This is the HomeScreen component
const MyStack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the MyStack Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
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

export default MyStack;
