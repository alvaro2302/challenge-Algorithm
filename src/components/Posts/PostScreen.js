import React,{useEffect} from "react";
import {View} from 'react-native';

import PostView from "./PostView";
const PostScreen = (props)=>{
    const {navigation} = props; 
    const user = props.route.params.user;
    useEffect(()=>{
        console.log("PostScreen",props);
    })
    return(
        <View style={{flex:1,}}>
            
            <PostView data={user} navegation={navigation}/>
         
        </View>
    );
};
export default PostScreen;