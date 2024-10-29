import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { CountContext } from "./context/CountContext";
import Second from "./Second";

const First = () => {
  const { increment } = useContext(CountContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Component</Text>
      <Button title="Increment" onPress={increment} />
      <Second />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    }
})
