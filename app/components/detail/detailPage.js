
import React, { Component } from 'react';

import {  
    Text,
    TouchableHighlight,
    Image,
    InteractionManager
} from 'react-native';

import { CHAPTERCONTENT_URL } from '../../constants/api';

import { fetchDetailPageData } from '../../actions/detailPageAction';

import { connect } from 'react-redux';

import ViewPager from 'react-native-viewpager';

import window from '../../constants/window';

class DetailPage extends Component {

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

    render() {
        
        return (
            <ViewPager
                style={{flex: 1}}
                dataSource={this._getViewPageDataSource()}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={false}/>
        )
    }

    _getViewPageDataSource = () => {
        let viewPage = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        if (this.props.data.length === 0)
            return viewPage;
        return viewPage.cloneWithPages(this.props.data);
           
    }

    _renderPage(url,pageID) {
        return (
            <Image
                source={{uri: url}}
                style={{width: window.width}} 
            />
        );
    }





    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let params = {
                comicName: this.props.navigation.state.params.comicName,
                id: this.props.navigation.state.params.id
            };
            this.props.fetchDetailPageData(CHAPTERCONTENT_URL,params,true);
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSuccess;
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
