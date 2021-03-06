import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from './actions/auth';

import OnBoarding from './components/onboarding';
import Login from './components/login';
import Signup from './components/signup';
import UploadLogo from './components/uploadlogo';
import ChooseBusinessType from './components/choosebusinesstype';
import Profile from './components/profile';
import ProfilePreview from './components/profilepreview';
import PostFeed from './components/postfeed';
import TakeCamera from './components/takecamera';
import ViewPost from './components/viewpost';
import CraftShop from './components/craftshop';
import Filter from './components/filter';
import CropMask from './components/cropmask';
import Drag from './components/drag';
import AddComponent from './components/addcomponent';
import Focus from './components/focus';
import SaveShare from './components/saveshare';
import TextEditor from './components/texteditor';
import CraftStock from './components/craftstock';
import Main from './components/main';

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

const reducerCreate = params => {
    const defaultReducer = Reducer(params);

    return (state, action) => {
        console.log("ROUTER ACTION: ", action);
        return defaultReducer(state, action);
    }
}


export default class postcraft extends Component {
    render() {
        return(
            <Router createReducer={reducerCreate}>
                <Scene key="root">
                <Scene key="onboarding" hideNavBar={true} component={OnBoarding} title="OnBoarding" initial />
                <Scene key="login" hideNavBar={true} component={Login} title="Login" type="replace" />
                <Scene key="signup" hideNavBar={true} component={Signup} title="Signup" type="replace" />
                <Scene key="uploadlogo" hideNavBar={true} component={UploadLogo} title="UploadLogo" />
                <Scene key="choosebusinesstype" hideNavBar={true} component={ChooseBusinessType} title="ChooseBusinessType" />
                <Scene key="profile" hideNavBar={true} component={Profile} title="Profile" />
                <Scene key="profilepreview" hideNavBar={true} component={ProfilePreview} title="ProfilePreview" />
                <Scene key="postfeed" hideNavBar={true} component={PostFeed} title="PostFeed" />
                <Scene key="takecamera" hideNavBar={true} component={TakeCamera} title="TakeCamera" />
                <Scene key="viewpost" hideNavBar={true} component={ViewPost} title="ViewPost" />
                <Scene key="craftshop" hideNavBar={true} component={CraftShop} title="CraftShop" type="replace" />
                <Scene key="filter" hideNavBar={true} component={Filter} title="Filter" />
                <Scene key="cropmask" hideNavBar={true} component={CropMask} title="CropMask" />
                <Scene key="drag" hideNavBar={true} component={Drag} title="Drag" />
                <Scene key="addcomponent" hideNavBar={true} component={AddComponent} title="AddComponent" />
                <Scene key="focus" hideNavBar={true} component={Focus} title="Focus" />
                <Scene key="saveshare" hideNavBar={true} component={SaveShare} title="SaveShare" />
                <Scene key="texteditor" hideNavBar={true} component={TextEditor} title="TextEditor" />
                <Scene key="craftstock" hideNavBar={true} component={CraftStock} title="CraftStock" />
                <Scene key="main" component={Main} title="Main" />
                </Scene>
            </Router>
        );
    }
}
