/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import ImageGrid from './ImageGrid.js';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
          <ImageGrid images={[
            {key:1, url:require('./assets/1.jpg')},
            {key:2, url:require('./assets/2.jpg')},
            {key:3, url:require('./assets/3.jpg')},
            {key:4, url:require('./assets/4.jpg')},
            {key:5, url:require('./assets/5.jpg')},
            {key:6, url:require('./assets/6.jpg')},
            {key:7, url:require('./assets/1.jpg')},
            {key:8, url:require('./assets/2.jpg')},
            {key:9, url:require('./assets/3.jpg')},
            {key:10, url:require('./assets/4.jpg')},
            {key:11, url:require('./assets/5.jpg')},
            {key:12, url:require('./assets/6.jpg')},
            {key:13, url:require('./assets/1.jpg')},
            {key:14, url:require('./assets/2.jpg')},
            {key:15, url:require('./assets/3.jpg')},
            {key:16, url:require('./assets/4.jpg')},
            {key:17, url:require('./assets/5.jpg')},
            {key:18, url:require('./assets/6.jpg')},
            {key:19, url:require('./assets/4.jpg')},
            {key:20, url:require('./assets/5.jpg')},
            {key:21, url:require('./assets/6.jpg')},
            {key:22, url:require('./assets/1.jpg')},
            {key:23, url:require('./assets/2.jpg')},
            {key:24, url:require('./assets/3.jpg')},
            {key:25, url:require('./assets/4.jpg')},
            {key:26, url:require('./assets/5.jpg')},
            {key:27, url:require('./assets/6.jpg')},
          ]} />
      </View>
    );
  }
}