import { 
        Text, 
        View, 
        TextInput 
        } from "react-native";
import styles from "./styles";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const HeaderForMobile = () => {
    return (
    <>
        <View style={styles.headerWrap}>
            <View style={styles.searchByTextWrap}>
                <Feather name="search" size={24} color="black" />
                <TextInput placeholder='search in rent.com'
                    style={styles.searchPlaceholder}
                    multiline={false}>
                </TextInput>
            </View>
            <View style={styles.locationCatSearchWrap}>
                <View style={styles.locationSearchWrap}>
                    <MaterialIcons name="location-on" size={24} color="black" />
                    <Text>Location</Text>
                    <Text style={styles.locationSearchText}>New York</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Fontisto name="player-settings" size={24} color="black" />
                    <Text style={styles.catText}>Category</Text>
                    <Text style={styles.catDynText}>Vehicle</Text>
                </View>
            </View>
        </View>
    </>
    );
};

export default HeaderForMobile;
