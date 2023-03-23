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

const SelectLocationScreen = () => {
    const navigation = useNavigation();

    const [locState, setLocState] = useState({

        names: [
            {
               id: 0,
               name: "Manhattan",
             },
        {
               id: 1,
               name: "Moonachie",
             },
        {
               id: 2,
               name: "Hackensack",
             },
          {
               id: 3,
               name: "Athenia",
             },
        {
               id: 4,
               name: "Wayne",
             },
           ],
       

    });

    return (
        <ScrollView>
            <Text style={{fontSize:20, margin:20,}}>
                Choose a Location
            </Text>
            {locState.names.map((item,index) => (
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
                        locID: item.id,
                        locName: item.name
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


export default SelectLocationScreen;