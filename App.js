import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Quiz
      "
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
