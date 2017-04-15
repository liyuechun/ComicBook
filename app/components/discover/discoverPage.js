

import React, { Component } from 'react';

import {  
    Text,
    ListView,
    Image,
    View,
    InteractionManager
} from 'react-native';

import window from '../../constants/window';

import CommonListView from '../common/commonListView';


import ChapterPage from '../chapter/chapterPage';

import { BOOK_URL } from '../../constants/api';

import { connect } from 'react-redux';

import { fetchDiscoverPageData } from '../../actions/discoverPageAction';

let params = {
    type: "青年漫画"
}


class DiscoverPage extends Component {
    static navigationOptions = {
        title: '发现'
    }

    
    render() {
        return (
            <CommonListView 
                pushToChapterPage={(comicName) => {
                    this.props.navigation.navigate('ChapterPage',{comicName});
                }}
                data={this.props.data}/>
        )
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchDiscoverPageData(BOOK_URL,params,true);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
    }

    componentWillReceiveProps (nextProps) {
        console.log('discover page componentWillReceiveProps');
        console.log(nextProps);
    }
    


}





export default DiscoverPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.discoverPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchDiscoverPageData
    }
)(DiscoverPage);