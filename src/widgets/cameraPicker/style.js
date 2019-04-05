import {StyleSheet} from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container:{
     
           
            height: 200, 
            backgroundColor: "grey",
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center"
        
    },
    label:{
        color: colors.main,
        
    },
    image:{
         position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
         borderRadius:4,
         resizeMode: "cover"
    }
})