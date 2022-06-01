import React,{useEffect} from "react";
import {View} from 'react-native';

import PostView from "./PostView";
const PostScreen = (props)=>{
    const user = props.route.params.user;
    useEffect(()=>{
        console.log("user",user);
    })
    return(
        <View style={{flex:1,}}>
            
            <PostView data={user}/>
         
        </View>
    );
};
export default PostScreen;