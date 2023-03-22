import { StyleSheet } from 'react-native';
import colors from '../../modal/color';

const styles = StyleSheet.create({
    headerWrap: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: colors.primary,
      alignItems: 'center',
    },
    searchByTextWrap:{
      backgroundColor: colors.white,
      flexDirection: "row",
      margin: 10,
      padding: 10,
      borderRadius: 5,
    },
    searchPlaceholder:{
      width: "100%",
      marginLeft: 10,
    },
    locationCatSearchWrap:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      width: "100%",    },
    locationSearchWrap:{
      flexDirection: "row",
    },
    locationSearchText:{
      fontWeight: "bold", 
      marginLeft: 10,
    },
    catText:{
      marginLeft: 5,
    },
    catDynText:{
      fontWeight: "bold", 
      marginLeft: 10,
    },
    SafeAreaViewForDroid:{
      flex:1,
      paddingTop: Platform.OS === 'android' ? 4 : 0,
    },
  });
  
  
export default styles;