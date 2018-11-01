// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { Text, View, ScrollView, Alert, Button, Image, TouchableOpacity, TouchableHighlight, StyleSheet} from 'react-native';
// const alertMessage = 'You pressed a button';
// export default class TouchableComponent extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			toggle: true
// 		}
// 	}
// 	btnPress() {
// 		//console.log('You pressed the button');
// 		//Alert.alert('My alert', alertMessage);
// 		Alert.alert('My alert', alertMessage, [
// 			{text: 'Cancel', onPress: () => console.log('You cancelled')},
// 			{text: 'OK', onPress: () => console.log('You confirmed')},
// 			]);
		
// 	}
// 	render() {
// 		let isToggle = this.state.toggle ? 'YES' : 'NO'
// 		return (
// 			<View>
// 				<Text>{isToggle}</Text>
// 				<TouchableHighlight
// 				underlayColor='yellow'
// 				onPress={() => this.setState({toggle: !this.state.toggle})}>
// 					<Text style={styles2.toggle}>Toggle</Text>
// 				</TouchableHighlight>

// 				<TouchableOpacity>
// 					<Image source={require('./sun.png')}/>
// 				</TouchableOpacity>
// 				<Button
// 					onPress={this.btnPress}
// 					title="Learn more"
// 					color='green'
// 					accesibilityLabel='This is a button'
// 				/>

// 				<ScrollView
// 					contentContainerStyle={{padding: 30}}
// 					horizontal={true}
// 					onContentSizeChange={(contentWidth,contentHeight) => 
// 						{console.log('Height: ' + contentHeight + 'Width: ' + contentWidth)}}
// 					onScroll={() => console.log('You are scrolling')}
// 					pagingeEnabled={true}
// 				>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 					<Text style={{fontSize:96}}>Large text</Text>
// 				</ScrollView>
// 			</View>
// 			);
// 	}
// }


// const styles2 = StyleSheet.create({
//   toggle: {
//     padding: 5,
//     backgroundColor: 'pink'
//   },
// });

import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}