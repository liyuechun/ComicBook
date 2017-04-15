import React, { Component,PropTypes } from 'react';
import {  
    Text,
    InteractionManager
} from 'react-native';

import CommonListView from '../common/commonListView';


import { BOOK_URL } from '../../constants/api';

import { connect } from 'react-redux';

import { fetchGirlPageData } from '../../actions/girlPageAction';

let params = {
    type: "少女漫画"
}


class GirlPage extends Component {

    static get defaultProps() {
        return {
            pushToChapterPage: () => {}
        }
    }

    static propTypes = {
        pushToChapterPage: PropTypes.func.isRequired
    }

    render() {
        return (
            <CommonListView 
                pushToChapterPage={(comicName) => {
                    this.props.pushToChapterPage(comicName)
                }}
                data={this.props.data}
            />
        )
    }

    componentWillReceiveProps (nextProps) {
        
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchGirlPageData(BOOK_URL,params,true);
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
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