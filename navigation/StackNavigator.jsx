// 외부
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// 내부
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
