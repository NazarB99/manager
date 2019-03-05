import React, {Component} from 'react'
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employersUpdate,employersCreate, employeeData,employeeEdit} from '../actions/employersActions';
import {Card, CardSection, Button} from '../common';

class EmployeeEdit extends Component {

    componentWillMount(){
        const {name,phone,shift,uid} = this.props;
        this.props.employeeData({name,shift,phone,uid});
    }

    onButtonPress = () => {
        const {shift, name, phone,uid} = this.props.employers;
        this.props.employeeEdit(name,phone,shift,uid);
    };

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>Save</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    employers: state.employers
});

export default connect(mapStateToProps, {employersUpdate,employersCreate,employeeData,employeeEdit})(EmployeeEdit);