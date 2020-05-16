import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import DiaryScreen from "../screens/DiaryScreen";
import OrientationScreen from "../screens/OrientationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Text } from "react-native";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Diary"
        component={DiaryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
                fontSize: 12,
              }}
            >
              Diário{" "}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="calendar" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orientation"
        component={OrientationScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
                fontSize: 12,
              }}
            >
              Orientações{" "}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="medicinebox" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
                fontSize: 12,
              }}
            >
              Perfil{" "}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Diary":
      return "Diário";
    case "Orientation":
      return "Orientações";
    case "Profile":
      return "Perfil";
  }
}
