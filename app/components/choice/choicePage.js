

import React, { Component } from 'react';

import {  
    Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import GirlPage from './girlPage';
import BeautifulPage from './beautifulPage';

import ChapterPage from '../chapter/chapterPage';

class ChoicePage extends Component {
    static navigationOptions = {
        title: '精选'
    }
    render() {
        return (
            <ScrollableTabView 
                tabBarActiveTextColor="rgb(250,126,30)"
                tabBarUnderlineStyle={{backgroundColor: 'rgb(250,126,30)'}}>
                <GirlPage 
                    tabLabel="少女漫画" 
                    pushToChapterPage={(comicName) => {
                        this.props.navigation.navigate('ChapterPage',{comicName});
                    }}    
                />
                <BeautifulPage 
                    tabLabel="耽美漫画" 
                    pushToChapterPage={(comicName) => {
                        this.props.navigation.navigate('ChapterPage',{comicName});
                    }}  
                />
            </ScrollableTabView>
        )
    }
}

export default ChoicePage;