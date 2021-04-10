import React from 'react'
import {
    ScrollView,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height;


export default class MenuDrawer extends React.Component {

    state = {
        userName: "",
        userSurname: ""
    }
    LogOut = async () => {
    }
    async componentDidMount() {
    }

    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: "22%" }} onPress={() => this.props.navigation.navigate(nav)} >
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require("../../../assets/icon.png")} />
                            </View>
                            <View style={styles.profileText}>

                                <Text style={styles.name}>{this.state.userName}</Text>

                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonLinks}>
                        {this.navLink('Home', 'Anasayfa')}
                        {this.navLink('Screen1', 'Listeler')}

                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.footerinfo}>
                        <Text style={styles.description}>City Guide</Text>

                        <Text style={styles.version}>v1.0</Text>
                    </View>

                    <View style={styles.imageView}>
                        <TouchableOpacity onPress={() => this.LogOut()}>
                            <Image source={require('../../images/logout.png')} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(243, 236, 231, 0.75)',
    },
    scroller: {
        flex: 1,

    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#777777",
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        height: "45%",
        width: "50%",
    },
    name: {
        fontSize: 0.045 * WIDTH,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left'

    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        height: "45%",
        width: "50%"

    },
    img: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
    },
    topLinks: {
        height: HEIGHT * 0.2,
        backgroundColor: 'rgba(186,104,200,0.7)'
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: WIDTH * 0.05,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'

    },
    footer: {
        height: HEIGHT * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    footerinfo:
    {
        width: WIDTH * 0.5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    version: {
        flex: 1,
        fontSize: WIDTH * 0.03,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: WIDTH * 0.04,
    },
    imageView: {
        height: "100%",
        width: "10%",
    }
});
