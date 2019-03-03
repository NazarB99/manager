import React,{Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from "../common";

class ListItem extends Component{
    render(){
        return(
            <CardSection>
                <Text style={{fontSize:18,paddingLeft:15}}>{this.props.employee.name}</Text>
            </CardSection>
        )
    }
}

export default ListItem;