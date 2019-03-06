import React, {Component} from 'react'
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employersUpdate,employersCreate, employeeData,employeeEdit} from '../actions/employersActions';
import {Card, CardSection, Button, Confirm} from '../common';

class EmployeeEdit extends Component {
    constructor(){
        super();

        this.state = {
            visible:false
        }
    }

    componentWillMount(){
        const {name,phone,shift,uid} = this.props;
        this.props.employeeData({name,shift,phone,uid});
    }

    onButtonPress = () => {
        const {shift, name, phone,uid} = this.props.employers;
        this.props.employeeEdit(name,phone,shift,uid);
    };

    onDeleteButton = () => {
        this.setState({visible:true})
    };

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>Save</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.onDeleteButton()}>Fire</Button>
                </CardSection>
                <Confirm visible={this.state.visible}/>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    employers: state.employers
});

export default connect(mapStateToProps, {employersUpdate,employersCreate,employeeData,employeeEdit})(EmployeeEdit);