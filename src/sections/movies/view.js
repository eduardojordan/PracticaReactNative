import React ,{Component} from 'react' 
import { View, Text,Image} from 'react-native'
import styles from './styles';

class Movies extends Component{
    static defaultsProps = {
        movie:[]
    }
    render(){
        const {movie} = this.props
        // const uri =  "http://image.tmdb.org/t/p/w500" + movie.poster_path
        return(
            <View style= {styles.container}>
            <Text style={styles.titleOne}>{"Movie"}</Text>
            {/* <Image source ={} style={styles.image}/> */}
            {/* <Image source={uri: 'https://facebook.github.io/react/logo-og.png'}
       style={{width: 100, height: 100}} />  */}
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseTitle}>{"Release Date"}</Text>
            <Text style={styles.release}>{movie.release_date}</Text>
            <Text style={styles.overviewTitle}>{"Sinopsis"}</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
          
            </View>
        );
    }
}

export default Movies

