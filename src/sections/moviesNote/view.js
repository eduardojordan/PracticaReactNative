import React, {Component} from 'react'
import {View, TouchableOpacity, Text, SafeAreaView, TextInput} from 'react-native'
import styles from "./styles"
import {Input} from "../../widgets"

class MoviesNote extends Component {

    constructor(props){
        super(props)
        this.state ={
            note: ''
        }
    }
        render(){
            return(
                <SafeAreaView style={styles.container}>
                <Input 
                label={"Note:"}
                value={this.state.note}
                onChangeText={v => this.setState({note: v})}        
                />
              
                </SafeAreaView>
    
            )
        }
    }



export default MoviesNote