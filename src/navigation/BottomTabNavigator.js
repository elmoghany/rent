import colors from "../modal/color";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import PostDetails from "../screens/PostDetails";
import Listing from "../screens/listing";

const BottomTabNav = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor:colors.primary, 
                tabBarActiveTintColor:colors.secondary,
                tabBarStyle:{backgroundColor:colors.white, height:60}
            }}
            sceneContainerStyle={{backgroundColor:colors.background}}
        >
            <Tab.Screen 
                name={"Explore"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="home" size={25} color={colors.secondary} />
                    ),
                    headerShown:false, 
                }}
            />
            <Tab.Screen 
                name={"Listing"}
                component={Listing}
                options={{
                    tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="clipboard-text" size={24} color="black" />                    
                    ),
                    headerShown:false, 
                }}
            />
            <Tab.Screen 
                name={"Chat"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="chat" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen 
                name={"Profile"}
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="user" size={24} color="black" /> 
                    ),
                }}
            />
        </Tab.Navigator>
        );
}

export default BottomTabNav;