import React,{Component} from 'react';
import {View} from 'react-native';

class CardSection extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
      return (
        <View style={style.containerStyle}>
            {this.props.children}
        </View>
      )
    }
}

const style ={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
}

export {CardSection};