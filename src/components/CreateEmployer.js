import React, {Component} from 'react'
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employersUpdate,employersCreate} from '../actions/employersActions';
import {Card, CardSection, Button, Input} from '../common';

class CreateEmployer extends Component {

    onButtonPress = () => {
        const {shift, name, phone} = this.props.employers;
        this.props.employersCreate(name,phone,shift);
    };

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>Submit</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    employers: state.employers
});

export default connect(mapStateToProps, {employersUpdate,employersCreate})(CreateEmployer);