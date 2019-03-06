import _ from 'lodash';
import React, {Component} from 'react'
import {FlatList} from 'react-native';
import {getEmployees} from '../actions/employersActions';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class EmployersList extends Component {
    componentWillMount(){
        this.props.getEmployees();
    }

    renderRow = ({item}) =>{
        return <ListItem employee={item} />
    };

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employers.employees, (val, uid) => {
        return {...val, uid}
    });

    return {employees}
};

export default connect(mapStateToProps,{getEmployees})(EmployersList);