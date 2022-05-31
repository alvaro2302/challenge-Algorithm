import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "./SearchScreen";
const screenOptions = {
    headerTransparent: true,
    headerTitleStyle: {
      display: 'none'
    },
    headerLeft: null,
    ...TransitionPresets.SlideFromRightIOS
  }
const Stack = createStackNavigator();

const SearchStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='search' screenOptions={screenOptions}>
            <Stack.Screen name='search' component={SearchScreen}/>
            

        </Stack.Navigator>
    );
}
export default SearchStack;