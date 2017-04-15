

import React, { Component,PropTypes } from 'react';
import {  
    ListView,
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {fetchMainPageData} from '../../actions/mainPageAction';

class CommonListView extends Component {

    
    static get defaultProps() {
        return {
            data: [],
            pushToChapterPage: () => {}
        }
    }

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        pushToChapterPage: PropTypes.func.isRequired
    }

    render(){
        return(
            <ListView
                style={{flex: 1}} 
                enableEmptySections={true}
                dataSource={this._getDataSource()}
                renderRow={this._renderRow}
            />
        );
    }


    _getDataSource = () => {
        console.log("======");
        console.log(this.props.data);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        
        if (this.props.data.length === 0){
            return ds;
        }
        return  ds.cloneWithRows(this.props.data);
    }


    _renderRow = (rowData) => {
        const {
            des,
            coverImg
        } = rowData;
        return (
            <TouchableHighlight onPress={() => {
                this.props.pushToChapterPage(rowData.name)
            }}>
                <View style={{width: window.width,height: 300}}>
                    <Image 
                        style={{height: 250,width: window.width}} 
                        source={{uri: coverImg}}
                    />
                    <Text
                        style={{height: 40,margin: 5}}
                        numberOfLines={2}
                    >{des}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default CommonListView;