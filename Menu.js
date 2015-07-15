'use strict';

var React = require('react-native');
var {
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;

var menu = [{'title': 'New In'},
                 {'title': 'Designers'},
                 {'title': 'Jewellery'},
                 {'title': 'Bracelets'},
                 {'title': 'Brooches'},
                 {'title': 'Earrings'},
                 {'title': 'Necklaces'},
                 {'title': 'Rings'},
                 {'title': 'Accessories'},
                 {'title': 'Bags'},
                 {'title': 'Beauty'},
                 {'title': 'Headphones'},
                 {'title': 'Scarves'},
                 {'title': 'Sunglasses'},
                 {'title': 'Watches'},
                 {'title': 'Stationery'},
                 {'title': 'Notebooks'},
                 {'title': 'My Stuff'},
                 {'title': 'Wishlist'},
                 {'title': 'Recent'},
                 {'title': 'Purchased'},
                 {'title': 'Logout'}];


var Menu = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(menu),
        }
    },


    render: function() {
        return (<ListView
                 dataSource={this.state.dataSource}
                 renderRow={this.renderRow}
                 style={styles.listView} />);
        },

    renderRow: function(item) {
        return (
         <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
        </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    title: {
        textAlign: 'left',
        marginTop: 2.5,
    },
    listView: {
        //paddingTop: 20,
        
        backgroundColor: '#F5FCFF',
    },
});

module.exports = Menu;
