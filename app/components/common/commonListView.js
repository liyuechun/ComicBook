

import React, { Component,PropTypes } from 'react';
import {  
    ListView,
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import window from '../../constants/window';

class CommonListView extends Component {


    static get defaultProps() {
        return {
            pushToChapter: () => {}
        }
    }
    static propTypes = {
        pushToChapter: PropTypes.func.isRequired
    }

    constructor (props, context) {
        super(props, context)
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(["1","2","3"])
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
        });
    }

    render(){
        
        return(
            <ListView
                style={{flex: 1}} 
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }

    _renderRow = (rowData) => {
        return (
            <TouchableHighlight
                underlayColor='rgb(221,221,229)' 
                onPress={() => {
                    this.props.pushToChapter(rowData.name);
                }}>
                <View style={{width: window.width}}>
                    <Image 
                        style={{height: 250,width: window.width}} 
                        source={{uri: rowData.coverImg}}
                    />
                    <Text
                        style={{marginBottom: 20}}
                        numberOfLines={3}
                    >{rowData.des}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default CommonListView;