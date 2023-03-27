import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Pressable,
    ScrollView,
    Image,
    Dimensions,
}
    from 'react-native';
import colors from "../../modal/color.js";
import React from 'react';
import {    withAuthenticator  } from '@aws-amplify/ui-react-native';
import { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import styles from './styles.js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import 'expo-image-manipulator';
import { createListing } from '../../graphql/mutations';
// import * as ImagePicker from 'expo-image-picker';
// import {randombytes} from 'react-native-randombytes';


const Listing = () => {
    const navigation = useNavigation();
    //    const imageData = "It is an image";
    //    [  getter  , setter     ] = hook "state"
    const [imageData, setImageData] = useState([])
    const [category, setCategory] = useState({catID:0,catName:"Category"})
    const [location, setLocation] = useState({locID:0,locName:"Location"})
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rentvalue, setRentValue] = useState("")
    const [userID, setUserID] = useState("")
    Auth.currentAuthenticatedUser()
    .then((user)=>{
        console.log("user id is: ",user.attributes.sub);
        setUserID(user.attributes.sub)
    })
    .catch((err) =>{
        console.log(err);
        throw err;
    })
    const route = useRoute();
    useEffect(()=>{
            if(!route.params){
                console.log("there is no image in route")
            } else if(route.params.imageData !== undefined){
                    console.log(route.params.imageData)
                    setImageData(route.params.imageData)
            }else if(route.params.catID !== undefined){
                    setCategory(route.params)
            }else if(route.params.locID !== undefined){
                    setLocation(route.params)
            }
})
    const imageALLURL = [];
    const storeToDB = async() => {
        imageData && imageData.map( async(component, index) =>{
            const imageURL = component.uri
            const response = await fetch(imageURL)
            console.log("response is: ",JSON.stringify(response))
            console.log("Image URI is: ",JSON.stringify(imageURL))
            const blob = await response.blob()
            const urlParts = imageURL.split(".")
            console.log("url parts: ",urlParts)
            const extension = urlParts[urlParts.length-1]
            console.log("extension: ",extension)
            const key = `${uuidv4()}.${extension}`
            console.log("key: ", key)
            imageALLURL.push({imageURL:key})
            console.log("imageALLURL: ",imageALLURL)
            console.log("storage: ",Storage.list)
            // await Storage.put(key, blob)
            //dynamoDB listing
            // setPostProcessing(true)
            //upload to s3
            const responseStorage = await Storage.put(key, blob)
            console.log("responseStorage: ",responseStorage)

            console.log("---------1--------")
            console.log("imageData.length= ",  imageData.length)
            console.log("key= ",  imageData.values)
            console.log("index= ",  index)
            console.log("imageData[i] where i= ",  imageData[index])
            console.log("---------1--------")
            // if(imageData.length == index+1){
                console.log("---------2--------")
                console.log("i am in the last image")
                const postData = {
                    // DB schema name : from  states
                    title:          title, 
                    categoryName:   category.catName,
                    categoryID :    category.catID,
                    description:    description,
                    images:         JSON.stringify(imageALLURL),
                    locationID:     location.locID,
                    locationName:   location.locName,
                    rentvalue:      rentvalue,
                    userID:         userID,
                    commonID:       "1",
                }            
                //from the mutation of graphql ... 
                //you can find the functions supported by the graphql db
                console.log("last image")
                console.log("postdata: ",postData)
                // const responseGraphql = await API.graphql({
                //     query: createListing,
                //     variables: { input: postData },
                //     authMode: "AMAZON_COGNITO_USER_POOLS",
                // });
                const responseGraphql = await API.graphql(graphqlOperation(createListing, { input: postData }, {authMode: "AMAZON_COGNITO_USER_POOLS"}))
                console.log("responseGraphql: ",responseGraphql)
                // send data to db
                
            // }
    })
    }
    return (
        <>
            <ScrollView style={{margin:10,
                        }}>
                <View>
                    <Text style={{marginTop:10}}>Upload Images [max 5 photos]</Text>
                    <Pressable style={styles.imgStyle}
                    onPress={()=>{
                        navigation.navigate("SelectPhotos")
                    }}
                    >
                        <AntDesign name="pluscircle" size={24} color={colors.secondary} />
                    </Pressable>
                    <View>
                        <ScrollView horizontal={true}>
                        {imageData && imageData.map((component,index)=>(                            
                            <Image 
                            key={component.id}
                            source={{uri:component.uri}} 
                            style={{
                                height:100,
                                width:100,
                                marginBottom:20,
                                marginTop:-5,
                                marginRight:5,
                            }}
                            />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <Pressable style={styles.catStyle}
                onPress={()=>{
                    navigation.navigate("SelectCategory")
                }}>
                    <View style={{  flexDirection:"row", 
                                    alignItems:"center",
                                    marginLeft:5,
                                    }}>
                    <MaterialIcons name="category" size={24} color={colors.secondary} />
                    <Text style={{  fontSize:16, 
                                    color: colors.secondary,
                                    marginLeft:5,
                                }}>
                        {category.catName}
                    </Text>
                    </View>
                    <AntDesign name="right" size={22} color={colors.secondary} />
                </Pressable>
                <Pressable style={styles.catStyle}
                onPress={()=>{
                navigation.navigate("SelectLocation")
                }}>
                    <View style={{  flexDirection:"row", 
                                    alignItems:"center",
                                    marginLeft:5,
                                    }}>
                    <FontAwesome name="map-marker" size={24} color={colors.secondary} />
                    <Text style={{  fontSize:16, 
                                    color: colors.secondary,
                                    marginLeft:10,
                                }}>
                        {location.locName}
                    </Text>
                    </View>
                    <AntDesign name="right" size={22} color={colors.secondary} />
                </Pressable>
                <View style={styles.inputTextStyle}>
                    <MaterialIcons name="title" size={24} color={colors.secondary} />
                    <TextInput 
                        placeholder="Ad Title" 
                        style={{
                            marginLeft:10, 
                            width:"100%",
                            }}
                        onChangeText={(text)    =>  setTitle(text)}/>
                </View>
                <View style={styles.inputTextStyle}>
                    <MaterialIcons name="description" size={24} color={colors.secondary} />
                    <TextInput 
                        placeholder="Write Description" 
                        style={{marginLeft:10,
                                width:"100%",
                        }}
                        onChangeText={(text)    =>  setDescription(text)}
                        multiline={true}
                        numberOfLines={3}
                    />
                </View>
                <View style={[styles.inputTextStyle, {width:"50%"}]}>
                    <FontAwesome name="dollar" size={24} color={colors.secondary} />
                    <TextInput placeholder="Write Value" 
                        style={{marginLeft:10,
                            width:"100%",
                        }}
                        onChangeText={(text)    =>  setRentValue(text)}
                        keyboardType="numeric"
                    />
            </View>
                <Pressable 
                onPress={()=>storeToDB()}
                android_ripple={{color:"grey"}}
                style={{  margin:10,
                                borderRadius:30,
                                backgroundColor:colors.secondary,
                                alignItems:"center",
                                paddingLeft:20,
                                // marginTop:150,
                                elevation:5,
                            }}>
                    <Text style={{  color:colors.white,
                                    paddingVertical:12,
                                    fontSize:14.5,
                                    fontWeight:"bold",
                                    }}>
                        POST AD 
                    </Text>
                </Pressable>
            </ScrollView>
        </>
    );
}

export default withAuthenticator(Listing);