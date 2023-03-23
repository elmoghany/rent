import { StyleSheet } from 'react-native';
import colors from '../../modal/color';;

const styles = StyleSheet.create({
  inputTextStyle:{
  backgroundColor:colors.white,
  paddingVertical:10,
  borderRadius:30,
  paddingLeft: 20,
  paddingRight:20,
  marginBottom:20,
  flexDirection:"row",
  alignItems:"center",

},
  imgStyle:{ backgroundColor:colors.white,
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin:20,
    marginVertical:20,
    height:150,
    width:150,
    borderWidth:1,
    borderStyle:"dashed",
    borderRadius:30,
},
  catStyle:{  
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    marginBottom:20,
    padding:5,
    paddingVertical:10,
    borderRadius:30,
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingRight:20,
  }




});
  
  
export default styles;