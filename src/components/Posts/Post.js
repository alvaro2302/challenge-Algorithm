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
 const getDetails = ()=>{
    console.log("press in post",title)
 }
 return (
     
    <Pressable style={styles.container} onPress={getDetails} >
        
        <ImageBackground
         style={styles.image}
         imageStyle={{borderRadius:15}}
         source ={{uri:urlPhoto}}
        >
         <Text style={styles.title}>{title}</Text>
        </ImageBackground>
    </Pressable>
 );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      height:250,
      marginTop:'10%'
   },
   image:{
      width:'100%',
      height:'100%',
     
   },
   title:{
      marginTop:'5%',
      marginStart:'5%',
      color:'white',
      fontSize:20,
      fontWeight:'bold'
   }
});

export default Post;
