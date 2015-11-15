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
} = React;

var PropertyFinder = React.createClass({
  render: function() {
    return (
      <View></View>
    );
  }
});

var styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
