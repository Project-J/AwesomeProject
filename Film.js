'use strict';

var React = require('react-native');
var {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
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


class Film extends Component {
    render()
    {
        return
        (<View style={styles.container}>
           <Text style={styles.description}>
             Film Tab
	   </Text>
	 </View>
        );
    }
}

module.exports = Film;
