import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import MenuButton from '../menu/MenuButton';
import FilterComponent from '../minicomponents/FilterComponent'
import { CardList } from 'react-native-card-list';
import firebase from '../../../Firebase'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
var maincard = [
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
        count: 0
    }
    async getData() {
        var cards = [];
        await firebase.firestore()
            .collection('CityGuide').doc('Lists')
            .collection("Cafe")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc && doc.exists) {
                        const image = { uri: doc.data().picture };
                        cards.push(
                            {
                                id: doc.data().id,
                                title: doc.data().title,
                                picture: image,
                                content: <Text>{doc.data().content}</Text>
                            }
                        )
                    }
                });

            });
        maincard = cards;
        await this.setState({ count: 1 })

    }
    async componentDidMount() {

        await this.getData();
    }
    render() {
        var cardList = this.state.count === 1 ? (maincard) : (null)
        return (
            <SafeAreaView style={styles.safeArea} >
                <MenuButton navigation={this.props.navigation} />
                <View style={styles.container}>
                    <CardList cards={cardList} />

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
        marginTop: HEIGHT * 0.07,
        backgroundColor: '#81D4FA',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
