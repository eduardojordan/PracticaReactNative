import{ StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
        paddingTop: 20
        // color: colors.white,
        // fontSize:"16",
        // margin:"10"
       
        
    },
    image:{
        width: '20',
        height: '20'
        // resizeMode:"cover"

    },
    titleOne:{
        color: colors.yellow,
  fontSize: 14,
  margin: 10,
  textAlign: "center",


    },
    title:{
        color: colors.white,
  fontSize: 18,
  margin: 10,
  textAlign: "center",
  

    },
    releaseTitle:{
        color: colors.yellow,
  fontSize: 14,
  margin: 10,
  textAlign: "center",
 

    },
    release:{
        color: colors.white,
  fontSize: 18,
  margin: 10,
  textAlign: "center",
  

    },
    overview:{
        color: colors.white,
  fontSize: 18,
  margin: 10,
  textAlign: "center",
  

    },
    overviewTitle:{
        color: colors.yellow,
  fontSize: 14,
  margin: 10,
  textAlign: "center",


    }
})