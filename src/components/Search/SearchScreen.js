import React from "react";
import {View} from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import SearchView from "./SearchView";
const SearchScreen = (props) =>{
   const {navigation} = props;
 return (
    <View style={{flex:1}}>
     
         <SearchView navigation={navigation}/>
     

    </View>
 )


}
export default SearchScreen;