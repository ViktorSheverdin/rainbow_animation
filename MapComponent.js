import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
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
                },
                showPin: true
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
            onRegionChange={this.onregionChange}
            style={styles.map}
            >
                <Circle
                center={{
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                }}
                radius={300}
                strokeColor='rgba(14, 130, 22 ,0)'
                fillColor='rgba(14, 130, 22 ,0.5)'
                />
                {this.state.showPin && <Marker
                coordinate={{
                    latitude: this.state.region.latitude,
                    longitude: this.state.region.longitude
                }}
                />}
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})
