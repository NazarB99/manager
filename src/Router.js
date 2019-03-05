import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeesList from './components/EmployeesList';
import CreateEmployer from "./components/CreateEmployer";
import EmployeeEdit from "./components/EmployeEdit";

class RouterComponent extends Component {
    render() {
        return (
            <Router sceneStyle={{paddingTop: 55}}>
                <Scene key="auth">
                    <Scene key="login" title="Please login" component={LoginForm} />
                </Scene>

                <Scene key="main">
                    <Scene rightTitle="Add" onRight={() => Actions.employers_create()} key="employees_list" title="Employers list" component={EmployeesList} />
                    <Scene key="employers_create" title="Create employee" component={CreateEmployer} />
                    <Scene key="employers_edit" title="Edit employee" component={EmployeeEdit} />
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent