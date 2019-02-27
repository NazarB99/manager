import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="login" title="Please login" component={LoginForm} />
            </Router>
        )
    }
}

export default RouterComponent