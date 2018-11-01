import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Button, ListView, StyleSheet, TouchableHighlight} from 'react-native';

const todos = [
	{
		name: 'My first task'
	},
	{
		name: 'My second task'
	},
	{
		name: 'My third task'
	}
];

export default class ListViewComponent extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !==r2
		})
		this.state = {
			todoDataSource: ds.cloneWithRows(todos)
		}

		this.pressRow = this.pressRow.bind(this);
		this.renderRow = this.renderRow.bind(this);
	}

	pressRow(rowID) {
		console.log('Row number ' + rowID);
	}

	renderRow(task, sectionID, rowID, highlightRow) {
		return (
			<TouchableHighlight onPress={() => {
				this.pressRow(rowID);
				highlightRow(sectionID,rowID);
			}}>
			<View style={styles.row}>
				<Text style={styles.text}>{task.name}</Text>
			</View>
			</TouchableHighlight>
		)
	}

	render() {
		return (
			<ListView
			dataSource = {this.state.todoDataSource}
			renderRow={this.renderRow}
			/>
		)
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding:  16,
		backgroundColor: 'green',
		marginBottom: 3
	},
	text: {
		flex:1
	}
})