import React,{useEffect,useState} from "react";
import {View,Text,Image,StyleSheet} from 'react-native';
import PostServices from "../../services/PostServices";
import PhotosService from "../../services/PhotosService";
const PostDetails = (props) =>{
    const idPost = props.route.params.idPost;
    const [post,setPost] = useState(null);
    const [photo,setPhoto] = useState(null);
    const getPost = async()=>{
        const postResult = await PostServices.getPost(idPost);
        const photoResult = await PhotosService.getImage(idPost);
        setPost(postResult[0]);
        setPhoto(photoResult[0]);
    }
    useEffect(()=>{
        getPost();
        
    },[])
    
    return (
        <View style={styles.container}>
            {
                (post && photo)?
                ( 
                    <View>
                        <Image
                            style={styles.image}
                            source={{uri:photo.url}}
                        />
                        <Text style={styles.title}>
                        {post.title}
                        </Text>
                        <View >
                        <Text  style={styles.body}>{post.body}</Text>
                
                    
                        </View>  
                    </View>
                     
                )
                :
                ( <View>
                      <Text>Not it posible get Details</Text>
                  </View>
                )
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:'50%'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
       fontWeight:"bold",
       fontSize:20,
       alignSelf:'center',

    },
    body:{
        width:'100%',
        marginTop:'5%',

    }

})
export default PostDetails;