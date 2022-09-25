import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(navigator);

/*
  Reusable components are contents that have general code but are used multiple time to show multiple content.
  By passing props to each component we can make the component show what we want!

  Little bit about project structure:
  In src folder we'll have a screens folder which shows the content on each screen in whole
  If we use reusable components they will be only a part of the whole screen. So, we will put these components in a folder named components.
  They will be used to show content on different screens!
  assets folder is used for adding static content. Files in this folder are constant and are used in the app.
*/