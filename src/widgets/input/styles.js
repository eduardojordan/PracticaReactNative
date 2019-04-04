import {StyleSheet}from 'react-native'
import  * as colors from '../../commons/colors'

export default StyleSheet.create({
    container:{ 
        paddingHorizontal: 20, 
        paddingVertical: 30

    },
    label:{ 
        color: colors.white, 
        fontSize: 14

    },
    input:{ 
        color: colors.white, 
        fontSize: 16, 
        borderWidth: 1, 
        borderRadius: 4, 
        borderColor: colors.yellow, 
        paddingVertical: 4, 
        paddingVertical: 150

    },
    error:{
         color: colors.error,
        fontSize: 12,
         marginTop: 8,
        textAlign: "right",
        opacity: 0.8
        
        
    }
})