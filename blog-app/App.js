import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import indexScreen from "./src/screens/indexScreen";
import showScreen from "./src/screens/showScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator({
    index: indexScreen,
    show: showScreen
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return(
    // Here <App /> will be passed as children prop to blogProvider!
    // This way <App /> which is all of our program (react stack navigator) is wrapped in a provder! Genius!!!
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}

/*
  Provider is responsible for managing all data and necessarily won't show anything on the screen!
  We will centralize all of our data inside the provider! This is called global state management!
  Every component can have DIRECT access to the data!
  Redux is a lib that does the same thing but here we are rebuilding somewhat of a Redux from scratch!

  Context is somewhat like props
  Props are used for communication between a parent and its IMMEDIATE child
  So for communication down a number of layers we have to code a lot! Each layer we have to just pass it the next one! This sucks!!!
  Context is here to solve this very issue!
  Context is used for moving info from a parent to some NESTED child! Directly!

*/