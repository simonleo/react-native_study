/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Image,
} = React;

var PropertyFinder = React.createClass({
  render: function() {
    return (
      <View style={styles.style_0}>
        <View style={styles.style_1}>
          <Text style={{marginTop:40, fontSize:25}}>1/4高</Text>
          <Text style={{marginTop:40, fontSize:25}}>1/4高</Text>
        </View>
        <View style={styles.style_1,{flexDirection: 'column'}}>
          <Text style={{marginTop:40, fontSize:25}}>1/4高</Text>
          <Text style={{marginTop:40, fontSize:25}}>1/4高</Text>
        </View>
        <View style={{flex:10, borderWidth:1,borderColor: 'red'}}>
          <Text style={{marginTop:40, fontSize:25}}>1/2高</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  style_0:{
    flex: 1,
  },
  style_1:{
    // border: '1px solid red',
    flex: 5,
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
