import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Pressable,
    ScrollView,
    Image
}
    from 'react-native';
import colors from "../../modal/color.js";
import React from 'react';
import {
    useAuthenticator,
    withAuthenticator,
} from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import styles from './styles.js';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const Listing = () => {
    const navigation = useNavigation();
    Auth.currentAuthenticatedUser()
    .then((user)=>{
        console.log("email is: ",user.attributes.email);
    })
    .catch((err) =>{
        console.log(err);
        throw err;
    })

//    const imageData = "It is an image";
    //    [  getter  , setter     ] = hook "state"
    const [imageData, setImageData] = useState([])
    const [category, setCategory] = useState({catID:0,catName:"Category"})
    const [location, setLocation] = useState({locID:0,locName:"Location"})
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rentvalue, setRentValue] = useState("")
    const route = useRoute();
    useEffect(()=>{
            if(!route.params){
                console.log("there is no image in route")
            } else if(route.params.imageData !== undefined){
                    setImageData(route.params.imageData)
            }else if(route.params.catID !== undefined){
                    setCategory(route.params)
            }else if(route.params.locID !== undefined){
                    setLocation(route.params)
            }
})
    return (
        <>
            <View style={{margin:10,
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
                <View style={{  margin:10,
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
                </View>
            </View>
        </>
    );
}

export default withAuthenticator(Listing);