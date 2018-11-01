import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

//import SimpleComponent1 from "./SimpleComponent1"
// import SimpleComponent2 from "./SimpleComponent2.js"
// import TextInputComp from "./TextInputComp.js"
// import SliderComponent from "./SliderComponent.js"
// import PickerComponent from "./PickerComponent.js"
// import StyleComponent from "./StyleComponent.js"
// import AnimationComponent from "./AnimationComponent"
// //<AnimationComponent/>
// //import Animation_Component from "./Animation_Component.js"
// import CameraComponent from './CameraComponent'
// import ListViewComponent from './ListViewComponent'
// import FetchComponent from './FetchComponent'
//import ModalExample from './TouchableComponent'
import MapComponent from './MapComponent'
//export default class App extends React.Component {
export default class App extends Component {
  render() {
    return (
      <View style={styles2.container}>
        <MapComponent/>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
