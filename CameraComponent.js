import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Button, ActivityIndicator} from 'react-native';
import {ImagePicker} from 'expo';

export default class CameraComponent extends Component {
	
	constructor() {
		super();
		this.state = {
			image: null
		}
	}

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEdditing: true,
			aspect: [5,5],
		});
		console.log(result);

		if (!result.cancelled) {
			this.setState({
				image: result.uri
			})
		}
	}

	render() {
		let {image} = this.state;
		return (
			<View style={{
				flex:1,
				aligntItems: 'center',
				justifyContent: 'center',
			}}>
			<Button
				title="Pick an image from camera roll"
				onPress={this._pickImage}
				/>
			{!image && <ActivityIndicator/>}
			{image &&
				<Image source={{
					uri: image
				}} style={{
					width: 200,
					height: 200
				}}	/>}
			</View>
			);
	}
}