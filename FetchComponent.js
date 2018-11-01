import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Modal, Alert, Dimensions, Button, ListView, StyleSheet, TouchableHighlight} from 'react-native';

const todos = [
	
];

export default class FetchComponent extends Component {
	constructor() {
		super();
		const windowWidth = Dimensions.get('window').width;
		const IMAGES_PER_ROW = 3;
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !==r2
		})
		this.state = {
			todoDataSource: ds,
			modalVisible: false,
			imgID: '',
		}

		this.pressRow = this.pressRow.bind(this);
		this.renderRow = this.renderRow.bind(this);
		
	}



	calculatedSize(){
	  var size = windowWidth / IMAGES_PER_ROW
	  return {width: size, height: size}
	}

	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
    	console.log(this.state.modalVisible);
  	}

	fetchTodos() {
		fetch('https://pixabay.com/api/?key=7246674-b37ac3e55b379cef1f626bb09&q=kitten&image_type=photo')
		.then((response) => response.json())
		.then((response) => {
			this.setState({
				todoDataSource: this.state.todoDataSource.cloneWithRows(response.hits)
			});
		})
	}

	componentDidMount() {
		this.fetchTodos();
	}

	pressRow(rowID) {
		console.log('Row number ' + rowID);
		this.setModalVisible(!this.state.modalVisible);
	}
	
	renderRow(task, sectionID, rowID, highlightRow) {
		return (			
			<View>
			<TouchableHighlight style={styles.row} onPress={() => {
				this.pressRow(rowID);
				this.setState({imgID: task});
				highlightRow(sectionID,rowID);
			}}>
			<View style={styles.row}>
				<Text style={styles.text}>{task.name}</Text>
				<Image style={styles.pics} source={{uri: task.largeImageURL}}/>
			</View>
			</TouchableHighlight>

			</View>

		)
	}

	render() {
		return (
			<View>
				<ListView
				dataSource = {this.state.todoDataSource}
				renderRow={this.renderRow}
				/>

				<Modal
		          animationType="slide"
		          transparent={false}
		          visible={this.state.modalVisible}
		          onRequestClose={() => {
		          Alert.alert('Modal has been closed.');
		        }}>
			        <TouchableHighlight style={styles.close}
	                onPress={() => {
	                this.setModalVisible(!this.state.modalVisible);
	                }}>
		            	<Image style={styles.close} source={require('./close-icon.png')}/>
		            </TouchableHighlight>	       
			        	<Image style={{
							width: 500,
							height:500
						}}source={{uri: this.state.imgID.largeImageURL}}/>
		        </Modal>
	        </View>

		)
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding:  16,
		backgroundColor: 'green',
		marginBottom: 5,
		width: Dimensions.get('window').width,
		height:180,
	},
	text: {
		flex:1
	},
	close: {
		flex: 0,
		width: 50,
		height: 50,
	},
	pics: {
		width: Dimensions.get('window').width,
		height:180,
	}
})