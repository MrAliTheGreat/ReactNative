import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import resultsShowScreen from "./src/screens/resultsShowScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: resultsShowScreen
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

export default createAppContainer(navigator);

/*
  Native has different navigation tools:
  StackNavigator: Different screens, button in one page to navigate to the other
  BottomTabNavigator: Options available at the bottom of screen to move to a new screen
  DrawerNavigator: Like 3 lines! When we tap it a new drawer will pop out from left or right of the screen.
  .                Then we can navigate to a new screen!

  defaultNavigationOptions is the default option that will be used for each screen
  Like, with this we can customize the header showed on top of different screens (title)

  When we run the project, the export at the end of App.js will be used to show a starting screen!
  We have to export a react component from App.js
  By using createAppContainer and passing navigator to it the navigator will turn into a react component!
  So, this way, the content of navigator can be displayed on the starting screen!
*/