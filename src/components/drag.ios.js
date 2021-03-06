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
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';
import SwipeCards from 'react-native-swipe-cards';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

let Card = React.createClass({
    render() {
        return (
            <View style={[styles.card]}>
            </View>
        );
    }
})

const Cards = [{imgUrl: require('../assets/CloseExit.png')}];

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

function handleYup(card) {
    console.log('Yup');
}

function handleNope(card) {
    console.log('Nope');
}

class Drag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
        }
    }

    onUndoClicked() {
        console.log('Undo Clicked');
    }

    onCopyClicked() {
        console.log('Copy Clicked');
    }

    onFlipClicked() {
        console.log('Flip Clicked');
    }

    onRedoClicked() {
        console.log('Redo Clicked');
    }

    onFilterClicked() {
        console.log('Filter Clicked');
    }

    onCropClicked() {
        console.log('Crop Clicked');
    }

    onFocusClicked() {
        console.log('Focus Clicked');
    }
    onColorPickerClicked() {
        console.log('Color Picker Clicked');
    }

    onGridClicked() {
        console.log('Grid Clicked');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={[styles.headerLeft, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/CloseExit.png')}>
                        </Image>
                    </View>
                    <View style={styles.headerMiddle}>
                        <Image
                            style={styles.imgNavLogo}
                            source={require('../assets/PostcraftNavLogo.png')}>
                        </Image>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/Share.png')}>
                        </Image>                        
                    </View>
                </View>
                <Image
                    style={styles.imgBg}
                    source={require('../assets/logo-man.png')}>
                    <Image
                        style={styles.imgLogo}
                        source={require('../assets/UserLogoContainer.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </Image>
                <View style={styles.toolTop}>
                    <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onUndoClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/UndoD.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onCopyClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/CopyD.png')}>
                            </Image>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress={() => this.onFlipClicked()}>
                            <Image
                                style={[styles.imgToolTop, styles.spaceBetween30]}
                                source={require('../assets/Flip.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopRight, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onRedoClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/RedoD.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.toolBottom}>
                    <View style={styles.toolBottomTop}>
                        <TouchableOpacity onPress={() => this.onFilterClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/FilterD.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Filter</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onCropClicked()}>
                            <View
                                style={styles.toolBottomTopItem}>
                                <Image
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/CropD.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Crop</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onFocusClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/FocusD.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Focus</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onColorPickerClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/ColorPickerD.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Color</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onGridClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/GridStockD.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Grid</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.toolBottomBottom}>
                        <SwipeCards
                            cards={this.state.cards}                     
                            renderCard={(cardData) => <Card {...cardData} />}
                            renderNoMoreCards={() => <NoMoreCards />}                     
                            handleYup={this.handleYup}
                            handleNope={this.handleNope}
                        />
                        <View style={[styles.toolBottomBottomItem, styles.toolItemSelected]}>
                            <Image
                                style={styles.imgToolBottomBottomItem}
                                source={require('../assets/logo-man.png')}>
                            </Image>
                        </View>
                        <View style={styles.toolBottomBottomItem}>
                        </View>
                        <View style={styles.toolBottomBottomItem}>
                            <Image
                                style={styles.imgToolBottomBottomItem}
                                source={require('../assets/UserLogoContainer.png')}>
                            </Image>
                        </View>
                        <View style={styles.btnPlus}>
                            <Text style={styles.textPlus}>+</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceBetween30: {
        marginLeft: 30,
    },
    toolItemSelected: {
        borderColor: '#4feeca',
        borderWidth: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        width: width,
        height: 50,
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
    imgBg: {
        width: width,
        height: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo: {
        width: 60,
        height: 60,
    },
    textTop: {
        marginTop: 5,
        fontSize: 28,
        color: '#f050ba',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textBottom: {
        marginTop: -10,
        fontSize: 56,
        color: '#f050ba',
        fontWeight: '800',
        backgroundColor: 'transparent',
    },
    toolTop: {
        flexDirection: 'row',
        width: width,
        height: 57,
        borderBottomWidth: 1,
        borderBottomColor: '#c6cbdf',
    },
    toolTopLeft: {
        flex: 0.15,
    },
    toolTopMiddle: {
        flex: 0.7,
        flexDirection: 'row',
    },
    imgToolTop: {
        width: 15,
        height: 15,
    },
    toolTopRight: {
        flex: 0.15,
    },
    toolBottom: {
    },
    toolBottomTop: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    toolBottomTopItem: {
        alignItems: 'center',
    },
    btnToolBottomTop: {
        width: 50,
        height: 50,
        // marginTop: 18,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c6cbdf',
    },
    textToolBottomTop: {
        marginTop: 5,
        color: '#c6cbdf',
        fontSize: 12,
    },
    toolBottomBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toolBottomBottomItem: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#c6cbdf',
        borderRadius: 5,
    },
    imgToolBottomBottomItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    btnPlus: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#4feeca',
    },
    card: {
        width: 50,
        height: 50,
    },
    textPlus: {
        fontSize: 20,
        color: '#4feeca',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Drag);
