import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import React from 'react';

export default function CustomComponentsFeature({ navigation }) {

    return (
        <View style={styles.container}>
            <Box width={20} height={100} color='yellow'></Box>
            <Box width={100} height={80} color='red'></Box>
            <Box width={120} height={80} color='pink'></Box>
            <Box width={140} height={100} color='purple'></Box>
            <Text style={{marginVertical: 16}}>тортик</Text>
        </View>
    );
}

export const Box = (props) => (
    <View style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color
    }} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 8,
        backgroundColor: '#f5f5f5'
    }
});