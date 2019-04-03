import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default  StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.main

},
// list:{
//     paddingTop:20
list: { paddingTop: 20 },
noResults: {
  color: colors.white,
  fontSize: 18,
  margin: 10,
  textAlign: "center",
  paddingTop: 40
}

});
