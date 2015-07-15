/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Feed = require('./Feed');
//var Film = require('./Film');
var More = require('./More');
var Slider = require('./Slider');
var Menu = require('./Menu');

var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TabBarIOS,
    Component,
} = React;


var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'feed'
        };
    };
    render() {
        return (
                <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
            title="Feed"
            selected={this.state.selectedTab === 'feed'}
            onPress={() => {
                this.setState({
                    selectedTab: 'feed',
                });
            }}>
                 <Feed />
            </TabBarIOS.Item>
                <TabBarIOS.Item
            title="Shop"
            selected={this.state.selectedTab === 'shop'}
            onPress={() => {
                this.setState({
                    selectedTab: 'shop',
                });
            }}>
                <Menu />
                </TabBarIOS.Item>
                  <TabBarIOS.Item
            title="Wishlist"
            selected={this.state.selectedTab === 'wishlist'}
            onPress={() => {
                this.setState({
                    selectedTab: 'wishlist',
                });
            }}>

                <Slider />
                </TabBarIOS.Item>
                <TabBarIOS.Item

            title="Something"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
                this.setState({
                    selectedTab: 'profile',
                });
            }}>
                <More />
            </TabBarIOS.Item>
                </TabBarIOS>
        );
    };
};

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
