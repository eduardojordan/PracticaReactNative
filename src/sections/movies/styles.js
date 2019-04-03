import{ StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
        flex: 1,
        backgroundColor: colors.main,
        paddingTop: 10
        
       
        
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