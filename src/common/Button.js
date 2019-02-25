import React, { Component } from 'react'
import {Text, TouchableOpacity} from 'react-native'

class Button extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render() {
    const {textButton, buttonStyle} = style;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={buttonStyle}>
        <Text style={textButton}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const style = {
    textButton:{
      alignSelf:'center',
      color:'#007aaf',
      paddingTop:10,
      paddingBottom:10,
      fontSize:16,
      fontWeight:'600'
    },
    buttonStyle:{
      alignSelf:'stretch',
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#fff',
      borderWidth:1,
      borderColor:'#007aaf',
      borderRadius:5,
      flex:1,
    }
}

export {Button};