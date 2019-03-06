import React, { Component } from 'react'
import {View, Text, Picker} from 'react-native';

class CustomPicker extends Component {
    render() {
        return (
            <View>
                <Text style={{ paddingLeft: 20, lineHeight: 23, paddingRight: 10, fontSize: 18, flex: 1 }}>Shift</Text>
                <Picker style={{ flex: 1 }} selectedValue={shift} onValueChange={value => this.props.employeeCreate({ prop: 'shift', value })}>
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                </Picker>
            </View>
        )
    }
}

export default CustomPicker;