import React from "react";
import {View,Text} from 'react-native';

const PostView = (props)=>{
    const {data} = props; 
    return (
        <View style={{marginTop:'20%'}}>
            <Text>List Posts</Text>
            <Text>{data.id}</Text>
        </View>
    )
}
export default PostView;