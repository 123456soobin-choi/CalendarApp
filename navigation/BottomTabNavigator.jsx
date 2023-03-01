// 외부
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";

// 내부
import Calendar from "../screens/Calendar";
import Home from "../screens/Home";
import Library from "../screens/Library";
import MyPage from "../screens/MyPage";

const Tabs = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="HOME"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="calendar"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="dumbbell"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MY PAGE"
        component={MyPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default BottomTabNavigator;
