import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator({

  },
  {
    defaultNavigationOptions: {
      title: "Blog"
    }
  }
);

export default createAppContainer(navigator);