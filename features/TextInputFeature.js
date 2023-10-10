import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

export default function TextInputFeature({ navigation }) {

    return (
        <View style={styles.container}>
            <Name />
            <NickName />
            <Login navigation={navigation}/>
        </View>
    );
}

function Name() {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style={{ marginVertical: 16 }}>
                {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
            />
        </View>
    );
}

function NickName() {
    const [nickname, setNickname] = useState('');

    return (
        <View>
            <Text style={{ marginVertical: 16 }}>
                {nickname ? `Nice to meet you ${nickname}!` : 'What is your nickname?'}
            </Text>
            <TextInput
                style={styles.input}
                blurOnSubmit={false}
                onSubmitEditing={(event) => setNickname(event.nativeEvent.text)}
            />
        </View>
    );
}

function Login({navigation}) {
    const correctLogin = '123'
    const correctPassword = 'qwe'
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const isLoggedIn = (login == correctLogin && password == correctPassword)
        setError(!isLoggedIn)
        setLoggedIn(isLoggedIn)
    }

    return (
        <View>
            {loggedIn ? (
                <Text> Welcome!</Text>
            ) : (
                <>
                    <Text style={{ marginVertical: 20 }}>
                        {!error ? 'Login form' : 'Wrong login or password'}
                    </Text>
                    <TextInput
                        style={styles.input}
                        blurOnSubmit={false}
                        returnKeyType='next'
                        placeholder='login'
                        autoCapitalize="none"
                        onSubmitEditing={(event) => {
                            this.password.focus();
                        }}
                        onChangeText={text => setLogin(text)}
                    />
                    <TextInput
                        ref={(input) => { this.password = input; }}
                        style={styles.input}
                        placeholder='password'
                        blurOnSubmit={false}
                        autoCapitalize="none"
                        onChangeText={text => setPassword(text)}
                        onSubmitEditing={handleLogin}
                    />
                    <Button
                        title='Login'
                        onPress={() => navigation.goBack()}
                    />
                </>
            )
            }
        </View>
    )
}



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