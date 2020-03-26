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
