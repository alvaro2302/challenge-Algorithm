import React, {useEffect,useState} from "react";
import {View,Text} from 'react-native';
const SearchResults = (props)=>{
    const {wordSearch,setLastSearch,} = props;
    const [stringReversed,setStringReversed] = useState(null); 
   

    const getReverse = (input)=>{
        let stringInput = Array.from(input);
        let numbers = [];
        let positions = {}; 
        
        for(let i=0;i<stringInput.length;i++)
        {
            if( parseInt( stringInput[i]))
            {
                numbers.push(stringInput[i]);
                positions[i] = true;
            }
        }
        if(numbers.length <=1)
        {
            return input;
        }
        else
        {
            let result = Array.from(input).map((element,index)=>{
                if(index in positions)
                {
                    const numberReverse = numbers.pop();  
                    return numberReverse;
                }
                else
                {
                    return element;
                } 
            })
            return result.join("");
        }
       
    
    }   
    useEffect(()=>{
        
        let result = getReverse(wordSearch);
        setStringReversed(result);

    },[])

    

        return(
            <View >
                { 
                    (stringReversed) &&
                    (<Text style={{textAlign:'center',fontSize:20}}> {stringReversed}</Text>)
                }
            </View>
        );
 
   
  
};
export default SearchResults;