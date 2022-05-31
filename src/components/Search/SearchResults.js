import React, {useEffect,useState} from "react";
import {View,Text} from 'react-native';
import SearchService from "../../services/SearchService";
import UserView from "../User/UserView";
const SearchResults = (props)=>{
    const {wordSearch} = props;
    const [searchResults,setSearchResults] = useState(null);
   
    const getResults = async(word)=>{
        const resultsSearch = await SearchService.search(word);
        console.log("respondess",resultsSearch);
        setSearchResults(resultsSearch)
        
    }
    useEffect(()=>{
        
        getResults(wordSearch);

    },[])

    

        return(
            <View>
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