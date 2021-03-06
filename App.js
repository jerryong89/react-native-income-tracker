import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ScrollView} from 'react-native'
import Todo from './Todo'


const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0)
  const [entries, setEntries] = useState([{
    description: "eat noods",
    amount: 10
  }])

  const addEntries = () => {
    setEntries([...entries, {
      description: description,
      amount: amount
    }]);

    setDescription('');
    setAmount('')
  }

  return (
    <SafeAreaView>
      <View >
        <Text style={styles.titleText}>
          Todo List</Text>
      </View>
      <ScrollView>
         {entries.map(entries => (
           <View>
             <Text>{entries.description}</Text>
             <Text>{entries.amount}</Text>
           </View>
        ))}
        </ScrollView>
      <TextInput
        style = {styles.input}
        value = {description}
        placeholder = "Enter description"
        onChangeText = {text => setDescription(text) }
      />
      <TextInput
        style = {styles.input}
        value = {amount}
        placeholder = "Enter Amount"
        keyboardType = 'numeric'
        onChangeText = {text => setAmount(text)}
      />
      <Button disabled = {!amount || !description} onPress={addEntries} title='Add Entry'/>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  }
})

export default App
