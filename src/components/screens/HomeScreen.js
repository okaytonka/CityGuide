import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import MenuButton from '../menu/MenuButton';
import MapView from 'react-native-maps';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {

    constructor() {
        super()
    }
    state = {
    }
    async componentDidMount() {
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea} >
                <MenuButton navigation={this.props.navigation} />
                <View style={styles.container}>
                    <MapView style={styles.map} />
                </View>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FF5236'
    },
    container: {
        flex: 1,
        backgroundColor: '#f3ece7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
