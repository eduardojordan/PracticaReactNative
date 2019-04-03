import React ,{Component} from 'react' 
import { TouchableOpacity, Image,Text} from 'react-native'
import styles from './styles';

class MovieCell extends Component{

    static defaultProps = {
        movie: {},
        onPress: () => {}
    }

_onCellTapped= () => {
    const {movie} = this.props
    this.props.onPress(movie)
}

    render(){
        const  { movie} = this.props
         //const source = movie && movie.poster_path ? { uri: movie.poster_path }: null
         const uri =  "http://image.tmdb.org/t/p/w500" + movie.poster_path
       
        return(
            <TouchableOpacity 
            onPress={ () => this._onCellTapped()} 
            style={styles.cell}>
                {/* <Image source ={source} style={styles.image}/> */}
                <Image source ={{uri : uri}} style={styles.image}/>
            </TouchableOpacity>
            
        )
    }
}

export default MovieCell