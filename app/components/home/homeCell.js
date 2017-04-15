

import React, { Component,PropTypes } from 'react';
import {  
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

class HomeCell extends Component {

    static get defaultProps() {
        return {
            rowData: {},
            pushToChapterPage: () => {}
        }
    }

    static propTypes = {
        rowData: PropTypes.object.isRequired,
        pushToChapterPage: PropTypes.func.isRequired
    }


    render() {

        const {
            coverImg,
            name,
            area,
            des,
            finish
        } = this.props.rowData;

        let finishImage = finish === false ? <Image /> : 
        <Image 
            style={{position: 'absolute', right: -5,margin: 0,top: -5}}
            source={require('../../images/ic_over.png')}
        />;

        return (
            <TouchableHighlight 
                underlayColor="white"
                onPress={() => {
                    this.props.pushToChapterPage(name);
                }}>
                <View style={{height: 100,borderBottomColor: 'gray',borderBottomWidth: 1,flexDirection: 'row'}}>
                    <Image 
                        source={{uri: coverImg}}
                        style={{width: 80,height: 80,margin: 10,borderRadius: 5}} />
                    <View style={{flex: 1,justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20,marginTop: 10}}>{name}</Text>
                        <Text>{area}</Text>
                        <Text
                            style={{marginBottom: 10}} 
                            numberOfLines = {1}>{des}</Text>
                    </View>
                    {finishImage}
                </View>
            </TouchableHighlight>
        )
    }
}

export default HomeCell;