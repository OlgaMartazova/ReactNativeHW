import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';

export default function CompletedList({ route }) {

    const keyExtractor = (index) => {
        return index.toString();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={route.params.completedList}
                    keyExtractor={(item, index) => keyExtractor(index)}
                    renderItem={({ item, index }) =>
                        <View style={styles.todoLine}>
                            <TouchableOpacity style={styles.todoLineTouch} onPress={() => touchHandler(index)}>
                                <Text style={{ flex: 3 }}>{item.text}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    )
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
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    todoLineTouch: {
        paddingTop: 16,
    },
    textInput: {
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16
    }
});