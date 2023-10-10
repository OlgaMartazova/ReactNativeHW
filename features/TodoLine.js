import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Pressable, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';

export default function TodoLine({ item, index, touchHandler, deleteHandler }) {
    return (
        <View style={[styles.todoLine, item.isCompleted ? { borderBottomColor: 'green' } : { borderBottomColor: 'pink' }]}>
            <TouchableOpacity style={styles.todoLineTouch} onPress={() => touchHandler(index)}>
                <Text style={{ flex: 3 }}>{item.text}</Text>
            </TouchableOpacity>
            <Pressable style={styles.todoLineTouch} onPress={() => deleteHandler(index)}>
                <Text style={{ color: 'black' }}>X</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16
    },
    todoLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'Top',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'pink',
    },
    todoLineTouch: {
        paddingTop: 16,
        paddingBottom: 4,
    },
    textInput: {
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16
    }
});