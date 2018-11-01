// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Permissions from 'react-native-permissions'

// export default class GPSComponent extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			locationPermission: 'unknown',
// 			position: 'unknown'
// 		}
// 	}

// 	_requestPermission() {
// 		Permissions.request('location')
// 		.then(response => {
// 			this.state({
// 			locationPermission: response
// 		})
// 		console.log("Response " + response);
// 	});
// 	}

// 	componentDidMount() {
// 		console.log('Start');
// 		this._requestPermission();
// 		console.log('Check position');
// 		navigator.geolocation.getCurrentPosition((position) => {
// 			console.log(position.coords);
// 			console.log('My position: ' + position.coords.latitude + ', ' + position.coords.longitude);
// 			let coordinates = position.coords.latitude + ', ' + position.coords.longitude;
// 			this.setState({
// 				position: coordinates
// 			})
// 		},
// 		(error) => alert(JSON.stringify(error)));
// 	}
// }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Permissions from 'react-native-permissions'

export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 50.60254331180157,
                latitudeDelta: 0.2729186541296684,
                longitude: 16.721875704824924,
                longitudeDelta: 0.26148553937673924
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    _requestPermission() {
        Permissions.request('location')
            .then(response => {
                this.setState({
                    locationPermission: response
                })
                console.log("Response " + response);
            })
    }

    componentDidMount() {
        console.log('Start');
        this._requestPermission();
        console.log('Check position');
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('Check position');
            console.log('My position: ' + position.coords.latitude + ', ' + position.coords.longitude);
            let coordinates = position.coords.latitude + ', ' + position.coords.longitude;
            this.setState({
                position: coordinates,
                region: {
                    latitude: position.coords.latitude,
                    latitudeDelta: 0.02729186541296684,
                    longitude: position.coords.longitude,
                    longitudeDelta: 0.026148553937673924,
                }
            })
        }, (error) => {
            alert(JSON.stringify(error));
        })
    }

    onRegionChange(region) {
        console.log(region);
        this.setState({
            region
        })
    }

    render() {
        return (
            <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            style={styles.map}
            />
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})