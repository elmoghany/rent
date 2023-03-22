import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TextInput,
}
    from 'react-native';
import colors from "../../modal/color.js";

const PostDetails = () => {
    return (
        <>
            <View>
                <Text>Hello From Post Details</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    safeAreaViewForDroid: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0,
        backgroundColor: colors.background
    },
})
export default PostDetails;