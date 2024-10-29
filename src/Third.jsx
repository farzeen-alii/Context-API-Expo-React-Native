import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CountContext } from './context/CountContext'

const Third = () => {
    const {count} = useContext(CountContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Third Component</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      {/* <Third /> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    countText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: 10
    }
})
export default Third