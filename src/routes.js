<<<<<<< HEAD
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Index from "./pages/Index";
import Main from "./pages/Main";
import Quest from "./pages/Quest";

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen name="Index" component={Index} options={{ title: "" }} />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: "Envelhecimento Ativo",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#df4723" }
        }}
      />
      <Stack.Screen
        name="Quest"
        component={Quest}
        options={{
          title: "Envelhecimento Ativo",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#df4723" }
        }}
      />
    </Stack.Navigator>
  );
}
=======
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createStackNavigator } from "react-navigation";

import SignIn from "./pages/signIn";
import Main from "./pages/main";
import Basic from "./pages/basic";
import SignOut from "./pages/signOut";

export default createStackNavigator(
  {
    SignIn,
    Main,
    Basic,
    SignOut
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#DA552F"
      },
      headerTintColor: "#FFF"
    }
  }
);
>>>>>>> 1aa0e30b2d4b554add0cc64d07cbb3b5fd323c4a
