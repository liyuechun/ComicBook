

import React, { Component } from 'react';

import {  
    Text,
    View,
    Image
} from 'react-native';

class MePage extends Component {
    static navigationOptions = {
        title: '我的'
    }
    render() {
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <Image 
                    style={{width: 340,height: 80,marginBottom: 20,marginTop: 30}}
                    source={require('../../images/me/mingpian_header.png')}/>
                <Image 
                    style={{width: 300,height: 300}}
                    source={require('../../images/me/erweimamingpian.png')}/>
            </View>
        )
    }
}

export default MePage;