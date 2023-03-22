import { StyleSheet } from 'react-native';
import colors from '../../modal/color';

const styles = StyleSheet.create({
    container: {
      // backgroundColor: '#fec85c40',
      flex:1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    postImage:{
      width:100, 
      height:100, 
      borderRadius:30, 
      marginLeft:10, 
      marginRight:20, 
      marginVertical:10,
    },
    postContentWrap:{
      justifyContent:"space-around", 
      paddingVertical:10,
    },
    postValue:{
      color: colors.primary, 
      backgroundColor: colors.secondary, 
      alignSelf:"flex-start", 
      padding:5, 
      borderRadius:10,
    },
    postPlace:{
      color:colors.purple,
    },
    postTitle:{
      fontWeight:"bold",
    },
    postWrap:{
      display:"flex", 
      flexDirection:"row",
      backgroundColor:colors.white,
      marginVertical:20,
      marginHorizontal:20,
      borderRadius:20,
      shadowColor:colors.black,
      shadowOffset:{width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    SafeAreaViewForDroid:{
      flex:1,
      paddingTop: Platform.OS === 'android' ? 4 : 0,
    },
  });
  
  
export default styles;