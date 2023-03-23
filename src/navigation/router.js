import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import PostDetails from "../screens/PostDetails";
import colors from "../modal/color";
import BottomTabNav from "./BottomTabNavigator";
import SelectPhotos from "../screens/selectPhotos";
import SelectCategory from "../screens/selectCategory";
import SelectLocationScreen from "../screens/selectLocation";

const Route = () => {
    const Stack = createStackNavigator();
    return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    cardStyle:{
                        backgroundColor: colors.background,
                    },
                }}>
                    <Stack.Screen   name="Home" 
                                    component={BottomTabNav} 
                                    options={{headerShown:false}}/> 
                    {/* because there is no child under home so we end it here */}
                    <Stack.Screen   name="PostDetails" 
                                    component={PostDetails}/> 
                    <Stack.Screen   name="SelectPhotos" 
                                    component={SelectPhotos}/> 
                    <Stack.Screen   name="SelectCategory" 
                                    component={SelectCategory}
                                    options={{headerShown:false}}/> 
                    <Stack.Screen   name="SelectLocation" 
                                    component={SelectLocationScreen}
                                    options={{headerShown:false}}/> 
                    </Stack.Navigator>
            </NavigationContainer>
    );
}

export default Route;