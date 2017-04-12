

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
            rowData: [],
            pushToChapter: () => {}
        }
    }

    static propTypes = {
        rowData: PropTypes.object.isRequired,
        pushToChapter: PropTypes.func.isRequired
    }


    render() {

        const { rowData } = this.props;

        const isShowCoverView = rowData.finish ? <Image 
                    source={require('../../images/ic_over.png')}
                    style={{width: 80,height: 100,position: 'absolute',top: -6,right: 0}} /> : null;

        return (
            <TouchableHighlight
                underlayColor='rgb(221,221,229)' 
                onPress={() => {
                    this.props.pushToChapter(rowData.name);
                }}>
                <View style={{height: 100,borderBottomColor: 'gray',borderBottomWidth: 1,flexDirection: 'row'}}>
                    <Image 
                        source={{uri: rowData.coverImg}}
                        style={{width: 80,height: 80,margin: 10,borderRadius: 5}} />
                    <View style={{flex: 1,justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20,marginTop: 10}}>{rowData.name}</Text>
                        <Text>{rowData.area}</Text>
                        <Text
                            style={{marginBottom: 10}} 
                            numberOfLines = {2}>{rowData.des}</Text>
                    </View>
                    {isShowCoverView}
                </View>
            </TouchableHighlight>
        )
    }
}

export default HomeCell;