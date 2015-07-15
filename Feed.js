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

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var Feed = React.createClass({
    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },

    componentDidMount: function() {
        this.fetchData();
    },

    fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    },

    buyTapped: function() {
        console.log('Buy tapped!');
    },

    likeTapped: function() {
        console.log('like tapped!');
    },

    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (<ListView
                 dataSource={this.state.dataSource}
                 renderRow={this.renderMovie}
                 style={styles.listView} />);
        },

    renderLoadingView: function() {
        return (
                <View style={styles.container}>
                <Text>
                Loading movies...
                </Text>
                </View>
        );
    },

    renderMovie: function(movie) {
        return (
          <View style={styles.container}>
                <View style={styles.titleHeader}>
                  <View style={styles.titleLeft}>
                    <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
                    <Text style={styles.title}>{movie.title + " @ " + movie.year}</Text>
                  </View>

                   <Text style={styles.time}>{movie.runtime + "m"}</Text>

                </View>
                <Image source={{uri: movie.posters.detailed}} style={styles.fullPic} />
                <View style={styles.operationRow}>
                  <TouchableHighlight style={styles.button} onPress={this.likeTapped.bind(this)}>
                    <Text>Like!</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.button} onPress={this.buyTapped.bind(this)}>
                    <Text>Buy $44!</Text>
                  </TouchableHighlight>
               </View>
        </View>
        );
    },

    renderMovieHeader: function(movie) {
        return
        (<View style={styles.titleHeader}>
           <View style={styles.titleLeft}>
             <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
             <Text style={styles.title}>{movie.title + " @ " + movie.year}</Text>
            </View>
            <Text style={styles.time}>{movie.runtime + "m"}</Text>
         </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
    button: {
        backgroundColor: 'orange',
    },
    titleHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 8,
        width:315,
    },
    operationRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 6,
        width:315,
    },
    title: {
        textAlign: 'left',
        marginTop: 2.5,
    },
    titleLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    time: {
        textAlign: 'right',
        marginTop: 2.5,
    },
    year: {
        textAlign: 'left',
        marginLeft: 2,
    },
    thumbnail: {
        width: 25,
        height: 25,
        marginRight: 2,
    },
    fullPic: {
        width: 325,
        height: 325,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

module.exports = Feed;
