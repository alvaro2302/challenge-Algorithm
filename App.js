/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SearchStack from './src/components/Search/SearchStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  

  return (
      <NavigationContainer>
        <SearchStack/>
      </NavigationContainer>
   
   
  );
};


export default App;
