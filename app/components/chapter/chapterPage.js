import React, { Component,PropTypes } from 'react';
import {  
    Text,
    Image,
    TouchableHighlight,
    ListView,
    View,
    InteractionManager
} from 'react-native';

import SGListView from 'react-native-sglistview';
import { CHAPTER_URL , BOOK_URL} from '../../constants/api';
import { fetchChapterPageData } from '../../actions/chapterPageAction'
import { connect } from 'react-redux';
import window from '../../constants/window';
import DetailPage from '../detail/detailPage';
const LIST_VIEW = 'listview';

class ChapterPage extends Component {

    static navigationOptions = {
        title: ({state}) => {
            return state.params.comicName;
        },
        header: ({state,setParams,goBack}) => {
            return {
                style: {backgroundColor: 'rgb(250,126,30)'},
                titleStyle: {color: 'white',fontSize: 18},
                left: 
                <TouchableHighlight 
                    underlayColor='rgb(250,126,30)'
                    onPress={() => {
                        goBack();
                    }}>
                    <Image 
                        source={require('../../images/back.png')}
                        style={{width: 30,height: 22.5,marginLeft: 5}} />
                </TouchableHighlight>
            }
        },
        tabBar: {
            visible: false
        }
    }


    static get defaultProps() {
        return {
            data: [],
            isLoading: false,
            isSuccess: false
        }
    }

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        isLoading: PropTypes.bool.isRequired,
        isSuccess: PropTypes.bool.isRequired
    }

    render() {
        
        return (
            <SGListView 
                ref={LIST_VIEW}
                pageSize={1}
                style={{flex: 1}}
                enableEmptySections={true}
                renderRow={this._renderRow}
                dataSource={this.getDataSource()}
                initialListSize={1}
                stickyHeaderIndices={[]}
                onEndReachedThreshold={1}
                scrollRenderAheadDistance={1}
            />
        )
    }

    getDataSource = () => {
        const dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1.uuid !== r2.uuid});
        return dataSource.cloneWithRows(this.props.data);
    }

    _renderRow = (rowData,sectionID,rowID) => {
        
        return (
            <TouchableHighlight 
                underlayColor='rgb(221,221,229)'
                onPress={() => {
                    let comicName = this.props.navigation.state.params.comicName;
                    let id = rowData.id;
                    let name = rowData.name;
                    this.props.navigation.navigate('DetailPage',{comicName,id,name});
                }}>
                <View style={{height: 40,justifyContent: 'center',borderBottomWidth: 1,borderBottomColor: 'gray'}}>
                    <Text 
                        style={{marginLeft: 10}}>{rowData.name}</Text>
                    <Image 
                        style={{position: 'absolute',width: 20,height: 20,top: 10,right:10}}
                        source={require('../../images/jiantou.png')} />
                </View>
            </TouchableHighlight>
        )
    }

    componentDidMount() {
        let comicName = this.props.navigation.state.params.comicName;
        let params = {comicName};
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchChapterPageData(CHAPTER_URL,params,true);
        });
        
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
    }


    componentWillUnmount() {
        console.log("componentWillUnmount");
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