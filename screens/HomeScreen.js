import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet } from 'react-native';
import { useRootStore } from '../store/UseRootStore';


export const HomeScreen = observer(() => {
    // const handleOnClick = () => {
    //     mobxClicker.actionClick();
    // };

    const {clickerStore} = useRootStore();

    const handleOnClick = () => {
        clickerStore.actionClick();
    }

    const handleOnRestart = () => {
        clickerStore.resetClick();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Count clicker value: {clickerStore.count}</Text>
                <Text>doubleCount value: {clickerStore.doubleCount}</Text>
                <Button onPress={handleOnClick} title={'Click me'} />
                <Button onPress={handleOnRestart} title={'Restart me'} />
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});