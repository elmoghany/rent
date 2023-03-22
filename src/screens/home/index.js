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
import { SafeAreaView } from 'react-native-safe-area-context';
import PostItems from "../../components/postItems/index.js";
import HeaderForMobile from "../../components/headerForMobile/index.js";
import colors from "../../modal/color.js";

const Home = () => {
    return (
        <>
            <HeaderForMobile />
            <PostItems />
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
export default Home;