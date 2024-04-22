import { StyleSheet, View, Text } from "react-native";
export default function App() {
  return (
    <View>
      <Text style={style.red}>My New App </Text>
    </View>
  );
}


const style = StyleSheet.create({
  red: {
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 300,

  }
})