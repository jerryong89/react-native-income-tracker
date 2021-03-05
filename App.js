import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, ScrollView} from 'react-native'
import Todo from './Todo'


const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([input, ...todos])
    setInput('')
  }

  return (
    <SafeAreaView>
      <View >
        <Text style={styles.titleText}>
          Todo List</Text>
      </View>
      <ScrollView>
        {todos.map(todo => (
        <Todo title={todo} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.todoInput}
        value = {input}
        onChangeText = {text => setInput(text) }
      />
      <Button onPress={addTodo} title='Add Todo'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
})

export default App
