import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class FilterComponent extends React.Component {

    constructor() {
        super()
    }
    state = {
        isVisible: null
    }
    async componentDidMount() {
    }
    onPressTouchable(choice) {
        if (this.state.isVisible === null || this.state.isVisible !== choice) {
            this.setState({ isVisible: choice })

        }
        else {
            this.setState({ isVisible: null })
        }
    }
    render() {
        const { isVisible } = this.state
        return (


            <View style={styles.bar}>
                <TouchableOpacity onPress={() => { this.onPressTouchable("museum") }} style={isVisible === "museum" ? (styles.touchableClick) : (styles.touchable)}>
                    <View style={{ backgroundColor: "red" }, styles.touchableContent}>
                        <MaterialIcons name="museum" size={35} color="#8d6e63" />
                        <Text>Tarihi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.onPressTouchable("party") }} style={isVisible === "party" ? (styles.touchableClick) : (styles.touchable)}>
                    <View style={styles.touchableContent}>
                        <MaterialCommunityIcons name="party-popper" size={35} color="red" />
                        <Text>Eğlence</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.onPressTouchable("cafe") }} style={isVisible === "cafe" ? (styles.touchableClick) : (styles.touchable)}>
                    <View style={styles.touchableContent}>
                        <MaterialIcons name="local-cafe" size={35} color="#ffc107" />
                        <Text>Cafe</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.onPressTouchable("park") }} style={isVisible === "park" ? (styles.touchableClick) : (styles.touchable)}>
                    <View style={styles.touchableContent}>
                        <MaterialIcons name="park" size={35} color="#4caf50" />
                        <Text>Park</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "#E0F7FA",
        width: WIDTH,
        height: HEIGHT * 0.075,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    touchable: {
        flex: 1
    },
    touchableClick: {
        flex: 1,
        backgroundColor: "#B2DFDB"
    },
    touchableContent: {
        justifyContent: "center",
        alignItems: "center"
    }
});
