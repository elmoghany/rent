import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Pressable,
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

const Listing = () => {
    Auth.currentAuthenticatedUser()
    .then((user)=>{
        console.log("email is: ",user.attributes.email);
    })
    .catch((err) =>{
        console.log(err);
        throw err;
    })
    return (
        <>
            <View>
                <View>
                    <Text>Images</Text>
                    <Pressable>

                    </Pressable>
                </View>
                <View>
                    <Text>Category</Text>
                </View>
                <View>
                    <Text>Location</Text>
                </View>
                <View>
                    <Text>title</Text>
                </View>
                <View>
                    <Text>Description</Text>
                </View>
                <View>
                    <Text>Value</Text>
                </View>
            </View>
        </>
    );
}

export default withAuthenticator(Listing);