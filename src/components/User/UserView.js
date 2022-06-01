import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserView = (props) =>{
    const {userName, email} = props;
    return (
        <View style={styles.result}>
            <View style={styles.Card}>
                <Icon name='user' size={50} style={styles.iconSearch} />
            </View>
            <View style={styles.information}>
                <View style={styles.Form} >
                    <Text style={styles.title}>
                    UserName: 
                    </Text>
                    <Text>
                    {userName}
                    </Text>
                </View>
                <View style={styles.Form}>
                    <Text style={styles.title}>
                    Email: 
                    </Text>
                    <Text>
                    {email}
                    </Text>
                </View>
            </View>
            
           

        </View>
    );
   
};
const styles = StyleSheet.create({
    result:{
        width:'95%',
        height:'80%',
        backgroundColor:'#33FCFF',
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row'
    },
    Form:{
        flexDirection:'row',
        marginStart:'15%'
    },
    title:{
        fontWeight:'bold',
        
    },
    Card:{
        
        marginRight:'1%',
        marginStart:'10%'
    },
    information:{
        alignSelf:'auto'
    }
    
});
export default UserView