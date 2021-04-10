import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import MenuButton from '../menu/MenuButton';
import FilterComponent from '../minicomponents/FilterComponent'
import { CardList } from 'react-native-card-list';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const cards = [
    {
        id: "0",
        title: "Starry Night",
        //   picture: require('./assets/starry.jpg'),
        content: <Text>Starry Night</Text>
    },
    {
        id: "1",
        title: "Wheat Field",
        //   picture: require('./assets/wheat.jpg'),
        content: <Text>Wheat Field with Cypresses</Text>
    },
    {
        id: "2",
        title: "Bedroom in Arles",
        //   picture: require('./assets/bed.jpg'),
        content: <Text>Bedroom in Arles</Text>
    }
]
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
                    <CardList cards={cards} />

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
