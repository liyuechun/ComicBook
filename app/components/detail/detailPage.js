


import React, { Component } from 'react';
import {  
    Text,
    TouchableHighlight,
    Image
} from 'react-native';

import { fetchDetailPageData } from '../../actions/detailPageAction';
import { connect } from 'react-redux';
import ViewPager from 'react-native-viewpager';

import { CHAPTERCONTENT_URL } from '../../constants/api';
import window from '../../constants/window';

class DetailPage extends Component {

    static navigationOptions = {
        title: ({state}) => {
            return state.params.name;
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

    render() {

        console.log("render");
        console.log(this.props.data);
        return (
            <ViewPager
                style={{flex: 1}}
                dataSource={this.getDataSource()}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={false}/>
        )
    }

    getDataSource = () => {
        let viewPage = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        
        return viewPage.cloneWithPages(this.props.data);
    }

    _renderPage(data,pageID) {
        return (
            <Image
                source={{uri: data}}
                style={{width: window.width}} 
            />
        );
    }


    componentDidMount() {
        console.log("componentDidMount");
        let comicName = this.props.navigation.state.params.comicName;
        let id = this.props.navigation.state.params.id;
        
        this.props.fetchDetailPageData(CHAPTERCONTENT_URL,{comicName,id},true);
    }
}

export default DetailPage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.detailPageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    { 
        fetchDetailPageData
    }
)(DetailPage);