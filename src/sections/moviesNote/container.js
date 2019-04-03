import {connect} from 'react-redux'
import View from './view'
import * as MoviesActions from "../../redux/movies/actions"

const mapStateToProps = state => {
    return{}
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(View)