

import React, { Component } from 'react';

import {  
    Text,
    Image,
    View,
    ListView,
    InteractionManager
} from 'react-native';

import window from '../../constants/window';

import ViewPager from 'react-native-viewpager';

import StaticContainer from 'react-static-container';

import HomeCell from './homeCell';

import ChapterPage from '../chapter/chapterPage';

import { fetchMainPageData } from '../../actions/mainPageAction';

import { connect } from 'react-redux';


import { BOOK_URL } from '../../constants/api';

let IMGS = [
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d6.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad61f.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d0.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d8.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad640.jpg',
    'http://imgs.juheapi.com/comic_xin/5559b86938f275fd560ad6d3.jpg'
];

let params = {
    type: "少年漫画",
    skip: 40
}

class HomePage extends Component {

    static navigationOptions = {
        title: '主页'
    }

    constructor (props, context) {
        super(props, context)
        let viewPage = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.state = {
            viewPageDataSource: viewPage.cloneWithPages(IMGS),
            listDataSource: ds.cloneWithRows([])
        }
    }
    

    render() {
        return (
            <ListView 
                style={{flex: 1}}
                enableEmptySections={true}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                dataSource={this.state.listDataSource}
            />
        )
    }

    _renderRow = (rowData) => {
        return (
            <HomeCell rowData={rowData} pushToChapterPage={(comicName) => {
                this.props.navigation.navigate('ChapterPage',{comicName});
            }}/>
        )
    }

    _renderHeader = () => {
        return (
            <StaticContainer>
                <View style={{width:window.width,height: 120}}>
                    <ViewPager
                        style={{flex: 1}}
                        dataSource={this.state.viewPageDataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>
            </StaticContainer>
        )
    }


    _renderPage(data,pageID) {
        return (
            <Image
                source={{uri: data}}
                style={{width: window.width}} 
            />
        );
    }

  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.isSuccess;
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          listDataSource: this.state.listDataSource.cloneWithRows(nextProps.data)
      });

  }

  componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
            this.props.fetchMainPageData(BOOK_URL,params,true);
        });
  }

}

export default HomePage = connect(
    (state) => {
        const { data,isLoading,isSuccess,err } = state.homePageReducer;
        return { 
            data,
            isLoading,
            isSuccess,
            err 
        }
    },
    {
        fetchMainPageData
    }
)(HomePage);