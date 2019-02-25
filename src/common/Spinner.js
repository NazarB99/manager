import React, { Component } from 'react'
import {View, ActivityIndicator} from 'react-native'

const Spinner = ({size}) => {
    return (
      <View style={style.spinnerStyle}>
          <ActivityIndicator size={size || 'large'}/>
      </View>
    )
}

const style={
    spinnerStyle:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
}

export {Spinner};