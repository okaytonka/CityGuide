import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import MenuButton from '../menu/MenuButton';
import FilterComponent from '../minicomponents/FilterComponent'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Screen1 extends React.Component {

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
                </View>
                <FilterComponent />
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#81D4FA'
    },
    container: {
        flex: 1,

        backgroundColor: '#81D4FA',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
