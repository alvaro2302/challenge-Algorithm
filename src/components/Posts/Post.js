import React,{useEffect,useState} from "react";
import {View,Text,Pressable,StyleSheet,ImageBackground} from 'react-native';
import PhotosService from "../../services/PhotosService";
const Post = (props) =>{
 const {idPhoto,title} = props; 
 const [urlPhoto,setUrlPhoto] = useState(null);
 const getImage = async()=>{
    const photo = await PhotosService.getImage(idPhoto);
    setUrlPhoto(photo[0].thumbnailUrl)
 }
 useEffect(()=>{
   getImage();
 },[])
 return (
     
    <View style={{flex:1,height:250}} >
        <Text>{title}</Text>
        <ImageBackground
         style={{width:'100%',height:'100%'}}
         imageStyle={{borderRadius:15}}
         source ={{uri:urlPhoto}}
        >
        </ImageBackground>
    </View>
 );
};

export default Post;
