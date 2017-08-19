import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ListView,
    Image,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');
const itemsPerRow = 2;

const filterData = [
    {name: 'SOON', bgColor: '#ffd357', borderColor: '#f5b957'},
    {name: 'OPENING', bgColor: '#50e3c2', borderColor: '#50e3c2'},
    {name: 'SALE', bgColor: '#f050ba', borderColor: '#f050ba'},
    {name: 'HOLD', bgColor: '#57fcfe', borderColor: '#57fcfe'}];
const filterDataSource = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
}).cloneWithRows(filterData);

const postData = [
    {name: '', image: require('../assets/logo-man.png')},
    {name: '', image: require('../assets/logo-man.png')},
    {name: '', image: require('../assets/logo-man.png')},
    {name: '', image: require('../assets/logo-man.png')},
    {name: '', image: require('../assets/logo-man.png')},
    {name: '', image: require('../assets/logo-man.png')}];
const dataSource = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
}).cloneWithRows(postData);

// map redux store to props
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

// map actions to props
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            Auth: bindActionCreators(AuthAction, dispatch),
        }
    }
}

class PostFeed extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={[styles.headerLeft, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/User.png')}>
                        </Image>
                    </View>
                    <View style={styles.headerMiddle}>
                        <Image
                            style={styles.imgNavLogo}
                            source={require('../assets/PostcraftNavLogo.png')}>
                        </Image>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <Icon name="gear" size={22} color="#000" />
                    </View>
                </View>
                <View style={styles.filterArea}>
                    <ScrollView horizontal={true}>
                        <ListView
                            contentContainerStyle={styles.filterList}
                            dataSource={filterDataSource}
                            renderRow={(data) => {
                                return (
                                    <View style={styles.filterListItem} backgroundColor={data.bgColor} borderColor={data.borderColor}>
                                        <Text style={styles.textFilterListItem}>{data.name}</Text>
                                    </View>
                                );
                            }}
                        />
                    </ScrollView>
                </View>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={dataSource}
                    renderRow={(data) => {
                        return (
                            <Image
                                style={styles.listItem}
                                source={data.image}>
                                    <Image
                                        style={styles.imgListItem}
                                        source={require('../assets/UserLogoContainer.png')}>
                                    </Image>
                                    <Text style={styles.textListItemTop}>SOON</Text>
                                    <Text style={styles.textListItemBottom}>OPENING</Text>
                            </Image>
                        );
                    }}
                />
                <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.5, y: 0.5}}
                    colors={['#50e3c2', '#88f3f2']}
                    style={styles.bgCross}>
                </LinearGradient>
                <TouchableOpacity onPress={() => Actions.camera()}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={['#50e3c2', '#88f3f2']}
                        style={[styles.buttons, styles.btnCamera]}>
                            <Image
                                style={styles.imgCornerButton}
                                source={require('../assets/Gallery.png')}>
                            </Image>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.gallery()}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={['#50e3c2', '#88f3f2']}
                        style={[styles.buttons, styles.btnGallery]}>
                            <Image
                                style={styles.imgCornerButton}
                                source={require('../assets/Gallery.png')}>
                            </Image>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.cross()}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}}
                        end={{x: 0.5, y: 0.5}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={[styles.buttons, styles.btnCross]}>
                            <Text style={styles.btnCrossText}>x</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fafbfd',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        width: width,
        height: 64,
    },
    headerLeft: {
        flex: 0.15,
    },
    imgHeaderButton: {
        width: 17,
        height: 17,
    },
    headerMiddle: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgNavLogo: {
        width: 100,
        height: 40,
    },
    headerRight: {
        flex: 0.15,
    },
    filterArea: {
        height: 55,
        backgroundColor: 'white',
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    filterList: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
    },
    filterListItem: {
        height: 30,
        width: 97,
        marginLeft: 12,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFilterListItem: {
        color: 'white',
        fontWeight: '900',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height - 100,
        marginTop: 15,
    },
    listItem: {
        height: (width - 40) / 2,
        width: (width - 40) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    imgListItem: {
        width: 30,
        height: 30,
    },
    textListItemTop: {
        marginTop: 5,
        fontSize: 12,
        color: '#f050ba',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textListItemBottom: {
        marginTop: -5,
        fontSize: 20,
        color: '#f050ba',
        fontWeight: '800',
        backgroundColor: 'transparent',
    },
    itemName: {
        color: '#c6cbdf',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgCross: {
        position: 'absolute',
        bottom: -111,
        right: -111,
        width: 222,
        height: 222,
        borderRadius: 111,
        opacity: 0.25,
    },
    btnCross: {
        position: 'absolute',
        bottom: -69,
        left: width / 2 - 69,
        width: 138,
        height: 138,
        borderRadius: 69,
    },
    btnCrossText: {
        marginLeft: -55,
        marginTop: -55,
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 32,
        fontWeight: '300',
    },
    btnCamera: {
        position: 'absolute',
        bottom: 76,
        right: -width / 2 + 25,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    btnGallery: {
        position: 'absolute',
        bottom: 17,
        right: -width / 2 + 79,
        width: 40,
        height: 40,
        borderRadius: 20,  
    },
    imgCornerButton: {
        height: 12,
        width: 15,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);
