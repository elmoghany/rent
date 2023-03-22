import { NavigationContainer } from "@react-navigation/native";
import { Text, View, Image, Pressable} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostItems = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => {
            navigation.navigate("PostDetails");
        }}
        style={styles.container}>
            <View style={styles.postWrap}>
                <Image
                    source={{
                        uri: "https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
                    }}
                    style={styles.postImage}
                ></Image>
                <View style={styles.postContentWrap}>
                    <View>
                        <Text style={styles.postTitle}>This is title for rent</Text>
                        <Text style={styles.postPlace}>New York</Text>
                    </View>
                    <Text style={styles.postValue}>$100 / day</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default PostItems;
