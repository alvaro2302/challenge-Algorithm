import React,{useState,useEffect} from "react";
import {View, StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchResults from "./SearchResults";


const SearchView = (props)=>{
    const {navigation} = props;
    const [search,setSearch] = useState('')
    const [isSearch,setIsSearch] = useState(false);
    const [lastSearch,setLastSearch] = useState({
        word:'',
        id:0
    });

    const searchResults = () =>{
        setIsSearch(true)
        setLastSearch({
            ...lastSearch,
            word:search
        })
        console.log("last search",lastSearch)
    }
    const getLastUser = () =>{
        console.log("last search",lastSearch)
        navigation.navigate('posts',{user:lastSearch})
    }
    useEffect(()=>{
        if(search == '')
        {
            setIsSearch(false);
        }
        if(search !== lastSearch.word)
        {
            console.log("change")
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
            <View style={{height:'50%'}}>
            {
                (search && isSearch)?
                (<SearchResults
                 wordSearch={search}
                 setIsSearch={setIsSearch}
                 setLastSearch={setLastSearch}
                />)
                : <Text>add email from user or click in button search!!</Text>
            }
            </View>
            <TouchableOpacity
             style={styles.buttonEnter}
             disabled={lastSearch.id === 0}
             onPress={getLastUser}
            >
                <Text >Ingresar</Text>
            </TouchableOpacity>
           
            
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
      marginTop: '10%',
      height:'50%',
      
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
    },
    buttonEnter:{
        width:'25%',
        height:'10%',
        backgroundColor:'#33FF39',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:15
    }
    
  });
export default SearchView;