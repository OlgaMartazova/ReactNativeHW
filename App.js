import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import ButtonFeature from "./features/ButtonFeature";
import TextInputFeature from "./features/TextInputFeature";
import CustomComponentsFeature from "./features/CustomComponentsFeature";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Button')}
        title="Button" />
      <Button onPress={() => navigation.navigate('TextInput')}
        title="TextInput" />
        <Button onPress={() => navigation.navigate('Custom Components')}
        title="Custom Components" />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Button'} component={ButtonFeature} />
        <Stack.Screen name={'TextInput'} component={TextInputFeature} />
        <Stack.Screen name={'Custom Components'} component={CustomComponentsFeature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
