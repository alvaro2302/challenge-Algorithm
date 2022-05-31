import React,{useState,useEffect} from "react";
import {View, StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchResults from "./SearchResults";
const SearchView = ()=>{
    const [search,setSearch] = useState('')
    const [isSearch,setIsSearch] = useState(false);
    const searchResults = () =>{
        setIsSearch(true)
    }
    useEffect(()=>{
        if(search == '')
        {
            setIsSearch(false);
        }
    },[search])
    return (
        <View style={styles.headerSearch}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="search for email"
                    value={search}
                    onChangeText={setSearch}            
                />
                <TouchableOpacity
                    style={styles.buttonSearch}
                    onPress={searchResults}
                    >
                    <Icon name='search' size={20} style={styles.iconSearch} />
                </TouchableOpacity>
            </View>
            <View>
            {
                (search && isSearch)?
                (<SearchResults
                 wordSearch={search}
                 setIsSearch={setIsSearch}
                />)
                : <Text>add email from user!!</Text>
            }
            </View>
           
            
        </View>

       
    )
}

const styles = StyleSheet.create({
   
    input: {
      height: 40,
      width:'80%',
      marginStart:'3%',
      alignSelf: 'stretch',
      borderWidth: 2,
      borderColor: '#D0D0D0',
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginVertical: 8,
      borderRadius: 5,
      backgroundColor:'white'
    },
    headerSearch:{
      marginTop: '10%'
    },
    buttonSearch:{
      backgroundColor:'#D0D0D0', 
      width:'10%',
      height:'70%',
      marginTop:'2%'},
    search:{
      flexDirection:'row'
    },
    iconSearch:{
        alignSelf:'center',
        marginTop:'25%'
    }
    
  });
export default SearchView;