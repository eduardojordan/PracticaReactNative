import React, {Component} from 'react'
import {View, TouchableOpacity, Text, SafeAreaView, TextInput} from 'react-native'
import styles from "./styles"
import {Input, Button, CameraPicker} from "../../widgets"

class MoviesNote extends Component {

    constructor(props){
        super(props)
        this.state ={
            note: '',
            noteError:"",
            image: null
        }
    }

    _onSubmit = () => {
        const {note}= this.state
        if(!note){
            let noteError = note ? "" : "Information incomplete"
            this.setState({noteError: ""})
            return
        }
        alert ("¡ API Connection Error !")
        //this.props.createNote()

    }
        render(){
            return(
                <SafeAreaView style={styles.container}>

                <View style= {{flex: 1}}>
                <Input 
                label={"Note:"}
                value={this.state.note}
                onChangeText={v => this.setState({note: v})}    
               error = {this.setState.noteError}
                />

                <CameraPicker 
                value={this.state.image} 
                onChange= {image => this.setState({image})}
                containerStyle={{margin:20}}
                />
                </View>

              <Button 
              label ={'Save Note'}
              onPress = {this._onSubmit}
             buttonStyle= {{margin: 20}}
              />
                </SafeAreaView>
    
            )
        }
    }



export default MoviesNote