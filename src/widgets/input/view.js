import React, {Component} from "react"
import {View, TextInput, Text} from "react-native"
import styles from './styles'
import { placeholder } from "@babel/types";

 class Input extends Component{
    render(){
        const {label, value, error, onChangeText,containerStyle,labelStyle, inputStyle, errorStyle, keyboardType, placeholder, placeholderTextColor} = this.props
         return (
             <View style={[styles.container, containerStyle]}>
                <Text style={[styles.label, labelStyle]}> {this.props.label} </Text>
                <TextInput style={[styles.input, inputStyle]}  
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                multiline={true}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                underlineColorAndroid = {"transparent"} // Evita la barra en Android
                
                />
                {error ? <Text style={[styles.error, errorStyle]}>{error}</Text> : null }
             </View>
         )
     }

}

Input.defaultProps = {
    label: "",
    value: "",
    error: "",
    onChangeText: () => {},
    containerStyle: {},
    labelStyle: {},
    inputStyle: {},
    errorStyle: {},
    keyboardType: 'default',
    placeholder:"Observation and notes of movie",
    placeholderTextColor:"rgba(255,255,255,0.4)",
    selectionColor: "rgba(255,255,255,0.4)"

}

export default Input


