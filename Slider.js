'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var {
    StyleSheet,
    View,
    Text,
    Image,
    Component,
} = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
});

var styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
      flex: 1,
      width: 325,
      height: 325,
  }
});

class Slider extends Component {
    render() {
        return (
                <Swiper style={styles.wrapper} showsButtons={false}
                dot={<View style={{backgroundColor:'rgba(49,79,79,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
            activeDot={<View style={{backgroundColor: '#3D352A', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
            paginationStyle={{
              bottom: 70,
            }}>
                <View style={styles.slide}>
                <Image source={{uri: 'https://fydn.imgix.net/m/PJ-52/PJ-52-13/matthew-calvin-thin-meteorite-rings-silver-P1.jpg'}} style={styles.image} />

                </View>
                <View style={styles.slide}>
                 <Image source={{uri: 'https://fydn.imgix.net/m/PJ-52/PJ-52-13/matthew-calvin-thin-meteorite-rings-silver-M1.jpg'}} style={styles.image} />

                </View>
                <View style={styles.slide}>
                 <Image source={{uri: 'https://fydn.imgix.net/m/PJ-52/PJ-52-13/matthew-calvin-thin-meteorite-rings-silver-M2.jpg'}} style={styles.image} />

                </View>
                </Swiper>

        );
    }
}

module.exports = Slider;
