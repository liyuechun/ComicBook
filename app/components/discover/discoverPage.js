

import React, { Component } from 'react';

import {  
    Text,
    ListView,
    Image,
    View
} from 'react-native';

import window from '../../constants/window';

import CommonListView from '../common/commonListView';

import { connect } from 'react-redux';

import { fetchDiscoverPageData } from '../../actions/discoverPageAction';

import { BOOK_URL } from '../../constants/api';
import HomeCell from '../home/homeCell';

//url参数
let params = {
    type: '青年漫画',
    skip: 20
}

class DiscoverPage extends Component {
    static navigationOptions = {
        title: '发现'
    }

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

    componentWillReceiveProps (nextProps) {
        
    }
    
    componentDidMount() {
        this.props.fetchDiscoverPageData(BOOK_URL,params,true);
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