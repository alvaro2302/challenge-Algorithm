import React, {useEffect,useState} from "react";
import {View,Text} from 'react-native';
import SearchService from "../../services/SearchService";
import UserView from "../User/UserView";
import { ScrollView} from 'react-native-gesture-handler';
const SearchResults = (props)=>{
    const {wordSearch,setLastSearch,} = props;
    const [searchResults,setSearchResults] = useState(null);
   
    const getResults = async(word)=>{
        const resultsSearch = await SearchService.search(word);
        if(resultsSearch.length > 0){
            setLastSearch((prevState)=>({
                ...prevState,
                id: resultsSearch[0].id
            }))
        }
        setSearchResults(resultsSearch)
        
    }
    useEffect(()=>{
        
        getResults(wordSearch);

    },[])

    

        return(
            <View >
                { searchResults &&
                    searchResults.map((user)=>(
                        <UserView
                         key={user.id}
                         userName = {user.username}
                         email = {user.email}
                        />
                    ))
                }
            </View>
        );
 
   
  
};
export default SearchResults;