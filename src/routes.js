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
