import React, { Component } from 'react';
import {  
    Text,
    InteractionManager
} from 'react-native';

import CommonListView from '../common/commonListView';
import { fetchBeautifulPageData } from '../../actions/beautifulPageAction';
import { connect } from 'react-redux';

import { BOOK_URL } from '../../constants/api';

//url参数
let params = {
    type: '耽美漫画',
    skip: 20
}


class BeautifulPage extends Component {

    render() {
        return (
            <CommonListView 
                pushToChapter={(comicName) => {
                    console.log(this.props);
                    this.props.navigation.navigate('ChapterPage',{comicName});
                }}
                data={this.props.data}/>
        )
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchBeautifulPageData(BOOK_URL,params,true);
        });
    }
}

export default BeautifulPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.beautifulPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    { 
        fetchBeautifulPageData
    }
)(BeautifulPage);