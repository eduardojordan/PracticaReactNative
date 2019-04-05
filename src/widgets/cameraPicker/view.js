import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Text } from "react-native"
import ImagePicker from 'react-native-image-picker'
import {CAMERA_OPTIONS} from '../../config/camera'
import styles from './style'

class CameraPicker extends Component{

_showImagePicker = () => {
    ImagePicker.showImagePicker(CAMERA_OPTIONS, response => {
        console.log('Response = ', response);
      
        if (response.uri) {
         
          // You can also display the image using data:
          // const source = {uri: response.url }
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.props.onChange(response)
          
        }
      });
}


    render(){
        const { value , label, containerStyle, labelStyle} = this.props
        const source = value ? {uri: value.uri } : null
        return(
            
            <TouchableOpacity  
            style= {[styles.container, containerStyle]} 
            onPress= {this._showImagePicker}>

            <Image source= {source} style={styles.image}/>  
            <Text style={[styles.label, labelStyle]} > {label}</Text>
           
            </TouchableOpacity>
        )
    }
}


CameraPicker.defaultProps = {
    value: null,
    onChange: () => {},
    label: "Select Image",
    containerStyle:{},
    labelStyle: {}

}

export default CameraPicker