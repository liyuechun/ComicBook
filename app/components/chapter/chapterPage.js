import React, { Component } from 'react';

import {  
    Text,
    TouchableHighlight,
    Image,
    ListView,
    View,
    InteractionManager
} from 'react-native';


import { CHAPTER_URL } from '../../constants/api';

import { fetchChapterPageData } from '../../actions/chapterPageAction';

import { connect } from 'react-redux';

class ChapterPage extends Component {


     static navigationOptions = ({navigation}) => {
        
        return {
            headerTitle: navigation.state.params.comicName,
            tabBarVisible: false,
            headerLeft: <TouchableHighlight
                            underlayColor="rgb(250,126,30)" 
                            onPress={() => {          
                                navigation.goBack();
                            }}>
                                <Image
                                    source={require('../../images/back.png')}
                                    style={{width: 25,height: 25,marginLeft: 10}}
                                />
                        </TouchableHighlight>
        }
    }

    static get defaultProps() {
        return {
            data: ['1','2','1','2','1','2','1','2','1','2']
        }
    }

    render(){
        return(
            <ListView 
                removeClippedSubviews={false}
                enableEmptySections={true}
                dataSource={this._getDataSource()}
                renderRow={this._renderRow}
            />
        );
    }

    _getDataSource = () => {

        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        if (this.props.data.length === 0)
            return ds;
        return ds.cloneWithRows(this.props.data);
    }

    _renderRow = (rowData) => {
        let comicName = this.props.navigation.state.params.comicName;
        let id = rowData.id;
        let params = {comicName,id};
        return (
            <TouchableHighlight 
                underlayColor='white'
                onPress={() => {
                    this.props.navigation.navigate('DetailPage',params);
                }}>
                    <View style={{height: 40,borderBottomColor:'gray',borderBottomWidth: 1,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                        <Text style={{marginLeft: 20}}>{rowData.name}</Text>
                        <Image
                            style={{width: 30,height: 30,marginRight: 10}} 
                            source={require('../../images/jiantou.png')}/>
                    </View>
            </TouchableHighlight>
        )
        
    }


    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let params = {comicName: this.props.navigation.state.params.comicName};
            this.props.fetchChapterPageData(CHAPTER_URL,params,true);
        });
    }



}

export default ChapterPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.chapterPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchChapterPageData
    }
)(ChapterPage);
