import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeesList from './components/EmployeesList';

class RouterComponent extends Component {
    render() {
        return (
            <Router sceneStyle={{paddingTop: 55}}>
                <Scene key="login" title="Please login" component={LoginForm} />
                <Scene key="employees_list" title="Employers list" component={EmployeesList} />
            </Router>
        )
    }
}

export default RouterComponent