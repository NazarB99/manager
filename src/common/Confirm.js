import React, {Component} from 'react';
import {View, Modal, Text} from 'react-native';
import {CardSection, Button} from "../common";

class Confirm extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({visible:nextProps.visible})
    }

    onClose = () => {
      this.setState({visible:false})
    };

    render() {
        return(
            <View>
                <Modal animationType="slide" transparent={false}
                       visible={this.state.visible}
                       onRequestClose={() => console.log('Modal has been closed')}>
                    <View style={styles.container}>
                        <CardSection style={styles.cardSectionStyle}>
                            <Text style={styles.textStyle}>Are you sure?</Text>
                        </CardSection>
                        <CardSection style={styles.cardSectionStyle}>
                            <Button>Yes</Button>
                            <Button onPress={this.onClose}>No</Button>
                        </CardSection>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = {
    container:{
        flex: 1,
        height:200,
        position:'relative',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.75)'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    cardSectionStyle:{
        justifyContent:'center'
    }
};

export {Confirm};