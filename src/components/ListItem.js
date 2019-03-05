import React,{Component} from 'react';
import {Text,TouchableNativeFeedback,View} from 'react-native';
import {CardSection} from "../common";
import {Actions} from 'react-native-router-flux';

class ListItem extends Component{
    onPress = () => {
        const {name,shift,phone,uid} = this.props.employee;
        Actions.employers_edit({name,phone,shift,uid});
    };

    render(){
        return(
            <TouchableNativeFeedback onPress={this.onPress}>
                <View>
                    <CardSection>
                        <Text style={{fontSize:18,paddingLeft:15}}>{this.props.employee.name}</Text>
                    </CardSection>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default ListItem;