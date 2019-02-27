import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from '../common';
import { connect } from 'react-redux';
import { emailTyping, passwordTyping, loginUser } from '../actions/authActions';

class LoginForm extends Component {

    emailChangeHandler = (text) => {
        this.props.emailTyping(text);
    }

    passwordChangeHandler = (text) => {
        this.props.passwordTyping(text);
    }

    onLogin = () => {
        const { email, password } = this.props.auth;
        this.props.loginUser(email, password)
    }

    renderErrorOrShowSpinner = () => {
        const { error, loading } = this.props.auth;
        if (error !== null) {
            return (
                <View style={{ backgroundColor: 'white', marginTop: 10 }}>
                    <Text style={{ fontSize: 15, alignSelf: 'center', color: 'darkred' }}>{error}</Text>
                </View>
            )
        }
        else if (loading === true) {
            return (
                <Spinner size='small' />
            )
        }
    }

    render() {
        const { email, password } = this.props.auth;
        return (
            <Card>
                <CardSection>
                    <Input onChangeText={(text) => this.emailChangeHandler(text)} value={email} placeholder="email@gmail.com" label="Email address" />
                </CardSection>
                <CardSection>
                    <Input secureTextEntry={true} onChangeText={(text) => this.passwordChangeHandler(text)} value={password} placeholder="password" label="Password" />
                </CardSection>
                {this.renderErrorOrShowSpinner()}
                <CardSection>
                    <Button onPress={this.onLogin}>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { emailTyping, passwordTyping, loginUser })(LoginForm);