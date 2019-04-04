import React, { Component } from 'react'
import {SafeAreaView, FlatList, RefreshControl, Text} from 'react-native'
import styles from "./styles"
import { Actions } from 'react-native-router-flux'
import * as api from '../../webservices'
import { MovieCell } from '../../widgets'
import * as colors from '../../commons/colors'

 import { YellowBox } from 'react-native';
 YellowBox.ignoreWarnings(['Remote debugger']);


class Home extends Component{
    constructor(props){
        super(props)
      this.props.getMoviesList()

    }
 
    _onMovieTapped = movie => {
        const titlex = movie.title
        const onRight = _ => 
        Actions.MoviesNote({movie: movie , title: "Note " + titlex})
         Actions.Movies({ movie, title:titlex , onRight })
    }

    _KeyExtractor = (item, index) => `${item.id}`

    _renderItem = ({item, index}) => (
    <MovieCell movie={item} onPress={movie => this._onMovieTapped(movie)}/>
)
   _renderFetching = isFetching => {
    if (!isFetching){
        return null 
    }
        return(
        <ActivityIndicator color={colors.white} style={{margin: 20 }}/>
        )
    } 
 
    _renderNoResultsText = isFetching => {
        if (!isFetching){
            return null
        }
        return <Text style={styles.noResults}> {"Sin información disponible"}</Text>
        
    }


    render(){
        const {moviesList, isFetching} = this.props;
        console.log("RENDER FETCHING", isFetching)
    return (
        <SafeAreaView style= {styles.container}>
          <FlatList
          style= {styles.list}
          data ={moviesList}
          KeyExtractor={this._KeyExtractor}
          renderItem = {this._renderItem}
          numColumns={2}
          ListEmptyComponent={_ => this._renderNoResultsText(isFetching)}
          refreshControl={
          <RefreshControl 
            onRefresh={this.props.getMoviesList}
            refreshing={isFetching}
            tintColor={colors.yellow}
            colors= {[colors.yellow]}
            />
          }
          />
        </SafeAreaView>
    );
}
}

export default Home;