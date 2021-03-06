import React,{Component} from 'react'
import {View,Picker,Text} from 'react-native';
import {CardSection,Input} from '../common';
import {employersUpdate} from '../actions/employersActions';
import {connect} from 'react-redux';

class EmployeeForm extends Component{
    onChange = ({prop, value}) => {
        this.props.employersUpdate({prop, value});
    };

    render(){
        const {name,phone,shift} = this.props.employers;
        return(
            <View>
                <CardSection>
                    <Input placeholder="Enter name" value={name} label="Name"
                           onChangeText={text => this.onChange({prop: 'name', value: text})}/>
                </CardSection>

                <CardSection>
                    <Input placeholder="Enter phone" value={phone} label="Phone"
                           onChangeText={text => this.onChange({prop: 'phone', value: text})}/>
                </CardSection>

                <CardSection>
                    <Text style={{flex: 1, paddingLeft:20,fontSize:18, alignSelf:'center'}}>Shift</Text>
                    <Picker style={{flex: 2}} selectedValue={shift}
                            onValueChange={value => this.onChange({prop: 'shift', value})}>
                        <Picker.Item label="Monday" value="monday"/>
                        <Picker.Item label="Tuesday" value="tuesday"/>
                        <Picker.Item label="Wednesday" value="wednesday"/>
                        <Picker.Item label="Thursday" value="thursday"/>
                        <Picker.Item label="Friday" value="friday"/>
                        <Picker.Item label="Saturday" value="saturday"/>
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = state => ({
   employers:state.employers
});

export default connect(mapStateToProps,{employersUpdate})(EmployeeForm);