import React, { Component } from 'react'
import {SafeAreaView, FlatList} from 'react-native'
import styles from "./styles"
import { Actions } from 'react-native-router-flux'
import * as api from '../../webservices'
import { MovieCell } from '../../widgets'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


class Home extends Component{
    constructor(props){
        super(props)
      this.props.getMoviesList()

    }
 
    _onMovieTapped = movie => {
         Actions.Movies({movie, title: movie.title})
    }

    _KeyExtractor = (item, index) => `${item.id}`

    _renderItem = ({item, index}) => (
    <MovieCell movie={item} onPress={movie => this._onMovieTapped(movie)}/>
)
    

    render(){
        const {moviesList} = this.props;
        console.log("movie this.props", this.props)
    return (
        <SafeAreaView style= {styles.container}>
          <FlatList
          style= {styles.list}
          data ={moviesList}
          KeyExtractor={this._KeyExtractor}
          renderItem = {this._renderItem}
          numColumns={2}
          />
        </SafeAreaView>
    );
}
}

export default Home;