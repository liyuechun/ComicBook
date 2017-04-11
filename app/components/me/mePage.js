

import React, { Component } from 'react';

import {  
    Text,
    Image,
    View
} from 'react-native';

import window from '../../constants/window';

class MePage extends Component {
    static navigationOptions = {
        title: '我的'
    }
    render() {
        return (
            <View style={{flex: 1,alignItems:'center',backgroundColor: 'white'}}>
                <Image
                    style={{width: window.width - 40,margin: 20,height: 80}} 
                    source={require('../../images/me/mingpian_header.png')}/>
                <Image 
                    style={{width: 300,height:300}}
                    source={require('../../images/me/erweimamingpian.png')}/>
                <Text style={{fontSize: 8,color: 'rgb(164,164,164)',marginTop: 10}}>扫一扫上面的二维码，加我微信</Text>
            </View>
        )
    }
}

export default MePage;