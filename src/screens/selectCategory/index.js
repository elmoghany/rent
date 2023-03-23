import {
    StyleSheet,
    View,
    Text,
}
    from 'react-native';
import colors from "../../modal/color.js";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './styles.js';

const SelectCategory = () => {
    const navigation = useNavigation();

    const [catState, setCatState] = useState({

        names: [
            {
                id: 0,

                fullIcon: (
                    <Entypo style={styles.catIcon} name="home" size={24} color="black" />
                ),
                name: "Apartment",
            },
            {
                id: 1,
                fullIcon: (
                    <Ionicons
                        style={styles.catIcon}
                        name="car-sport"
                        size={24}
                        color="black"
                    />
                ),
                name: "Vehicle",
            },
            {
                id: 2,
                fullIcon: (
                    <MaterialIcons
                        style={styles.catIcon}
                        name="room-preferences"
                        size={24}
                        color="black"
                    />
                ),
                name: "Household Items",
            },
            {
                id: 3,
                fullIcon: (
                    <Entypo style={styles.catIcon} name="book" size={24} color="black" />
                ),
                name: "Books",
            },
            {
                id: 4,
                fullIcon: (
                    <AntDesign
                        style={styles.catIcon}
                        name="paperclip"
                        size={24}
                        color="black"
                    />
                ),
                name: "Office Equipment",
            },
        ],

    });

    return (
        <ScrollView>
            <Text style={{fontSize:20, margin:20,}}>
                Choose a category
            </Text>
            {catState.names.map((item,index) => (
                <Pressable
                key={item.id}
                android_ripple={{color:colors.purple}}
                style={{    
                            padding:15,
                            backgroundColor:colors.primary,
                            alignItems:"center",
                            justifyContent:"flex-start",
                            flexDirection:"row",
                            paddingLeft:30,
                            borderBottomWidth:1,
                            borderBottomColor:colors.purple,
                            }}
                onPress={()=> {
                    navigation.navigate("Listing", {
                        catID: item.id,
                        catName: item.name
                    })
                }}>
                    {item.fullIcon}
                    <Text>
                        {item.name}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}


export default SelectCategory;