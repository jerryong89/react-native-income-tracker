import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({entries}) => {
  return (
    <View>
      <Text>{entries}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({})
