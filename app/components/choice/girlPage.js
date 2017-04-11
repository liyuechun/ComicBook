import React, { Component } from 'react';
import {  
    Text
} from 'react-native';

import CommonListView from '../common/commonListView';
import { fetchGirlPageData } from '../../actions/girlPageAction';
import { connect } from 'react-redux';

import { BOOK_URL } from '../../constants/api';

//url参数
let params = {
    type: '少女漫画',
    skip: 20
}


class GirlPage extends Component {

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
        this.props.fetchGirlPageData(BOOK_URL,params,true);
    }
}

export default GirlPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.girlPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    { 
        fetchGirlPageData
    }
)(GirlPage);