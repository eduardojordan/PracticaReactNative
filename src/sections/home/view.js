import React, { Component } from 'react'
import {SafeAreaView, FlatList, RefreshControl, Text} from 'react-native'
import styles from "./styles"
import { Actions } from 'react-native-router-flux'
import * as api from '../../webservices'
import { MovieCell } from '../../widgets'
import * as Colors from '../../commons/colors'

// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);


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
   _renderFetching = isFetching => {
    if (!isFetching){
        return null 
    }
        return(
        <ActivityIndicator color={Colors.white} style={{margin: 20 }}/>
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
          //ListFooterComponent={_ => this._renderFetching(isFetching)}
          refreshControl={
          <RefreshControl 
            onRefresh={this.props.getMoviesList}
            refreshing={isFetching}
            tintColor={Colors.yellow}
            colors= {[Colors.yellow]}
            />
          }
          />
        </SafeAreaView>
    );
}
}

export default Home;