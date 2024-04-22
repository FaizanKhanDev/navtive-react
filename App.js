import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import your components/screens
import HomeScreen from './Home.js';
import MyStack from './MyStack.js';

// Create a Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define the route for HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define the route for DetailsScreen */}
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
