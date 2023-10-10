import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import TodoLine from './TodoLine';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';


export default function TodoList({ navigation }) {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        let newTodos = [...todos]
        newTodos.push({ text, isCompleted: false })
        setTodos(newTodos)
        setText('')
    };

    const touchHandler = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
    }

    const deleteHandler = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const deleteAllHandler = () => {
        setTodos([])
    }

    const checkTextInput = () => {
        if (text.length != 0) {
            addTodo()
        }
    }

    const getCompletedTodos = () => {
        const newTodos = [...todos]
        return newTodos.filter(item => item.isCompleted)
    }

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Button title='Завершенные задачи' onPress={() => navigation.navigate('Completed', { completedList: getCompletedTodos() })} />
                <View style={styles.deleteAll}>
                    <Text style={{padding: 12}}>New tasks:</Text>
                    <Button title="Delete all" onPress={deleteAllHandler}></Button>
                </View>
                <FlatList
                    data={todos}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({ item, index }) =>
                        <TodoLine
                            item={item}
                            index={index}
                            touchHandler={touchHandler}
                            deleteHandler={deleteHandler}
                        />}
                />
                <TextInput style={styles.textInput}
                    onChangeText={newText => setText(newText)}
                    onSubmitEditing={checkTextInput}
                    value={text}
                ></TextInput>
                <Button title="ADD" onPress={checkTextInput}></Button>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16
    },
    deleteAll: {
        flexDirection: 'row',
        alignItems: 'Top',
        justifyContent: 'space-between',
    },
    textInput: {
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16
    }
});