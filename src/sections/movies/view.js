import React ,{Component} from 'react' 
import { View, Text,Image, SafeAreaView} from 'react-native'
import styles from './styles';

class Movies extends Component{
    static defaultsProps = {
        movie:[]
    }
    render(){
        const {movie} = this.props
         const uri =  "http://image.tmdb.org/t/p/w500" + movie.poster_path
        return(
            <SafeAreaView style= {styles.container}>
             <Image source={{uri : uri}}
             style= {{width: 200, height: 330, alignItems: 'center'}} />  
             
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseTitle}>{"Release Date"}</Text>
            <Text style={styles.release}>{movie.release_date}</Text>
            <Text style={styles.overviewTitle}>{"Sinopsis"}</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
          
            </SafeAreaView>
        );
    }
}

export default Movies

