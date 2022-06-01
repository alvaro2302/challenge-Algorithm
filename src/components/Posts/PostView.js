import React, {useEffect,useState}from "react";
import {StyleSheet,FlatList,View} from 'react-native';
import PostServices from "../../services/PostServices";

import Post from "./Post";
const PostView = (props)=>{
    const {data} = props;
    const [posts,setPost] = useState(null);
    const getPost = async()=>{
        const resultsPosts = await PostServices.getPosts(data.id);
        console.log("posts,",resultsPosts);
        setPost(resultsPosts);
    }
    const renderPost = ({item}) =>{
        return (
        <Post
          idPhoto={item.id}
          title={item.title} 
        />
        )
    }

    useEffect(()=>{
        getPost();
    },[])
    return (
         
            <FlatList
             data={posts}
             renderItem={renderPost}
             keyExtractor={(item)=>item.id}
             showsVerticalScrollIndicator={false}
            />       
            
    )
}
const styles = StyleSheet.create({
    container:{

    }
})
export default PostView;