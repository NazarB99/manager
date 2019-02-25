import React, { Component } from 'react'
import { Provider } from "react-redux";
import { View, Text } from 'react-native';
import store from '../store/store';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDYyWT4tZAW3vHZIqNPS0Yj5qC92WQNQ4k",
            authDomain: "manager-353a4.firebaseapp.com",
            databaseURL: "https://manager-353a4.firebaseio.com",
            projectId: "manager-353a4",
            storageBucket: "manager-353a4.appspot.com",
            messagingSenderId: "1054521619767"
        })
    }

    render() {
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;