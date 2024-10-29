import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Third from './Third'

const Second = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Component</Text>
      <Third />
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
    }
})
export default Second