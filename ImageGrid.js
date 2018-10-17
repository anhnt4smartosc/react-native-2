/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity, ScrollView, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class ImageGrid extends Component<Props> {

  constructor(props) {
    super(props);
    
    console.log(this.props);
    this.images = this.props.images;

    this.state = {
      selectedIds : []
    };

    this.clickImage = (id) => {
      this.isSelected(id) ? this.removeSelected(id) : this.select(id);
    }

    this.isSelected = id => {
      return this.state.selectedIds.indexOf(id) != -1;
    }

    this.select = id => {
      let selectedIds = this.state.selectedIds;
      selectedIds.push(id);

      this.setState({selectedIds: selectedIds});
    }

    this.removeSelected = id => {
      let selectedIds = this.state.selectedIds;

      for (var key in selectedIds) {
        if (selectedIds[key] == id) {
          selectedIds.splice(key, 1);
        }
      }

      this.setState({selectedIds: selectedIds});
    }
  }

  render() {
    let rows = [];
    let row = [];

    for(i = 0; i < this.images.length; i++) {
      row.push(this.images[i]);
      if(row.length == 3 || i == this.images.length - 1) {
        rows.push(row);
        row = [];
      }
    }

    return <View style={{flex:1}} >

          <Text style={styles.notification}>{ this.state.selectedIds.length + " images selected" }</Text>
            <ScrollView>  
              <View style={{flex:1, flexDirection: 'column'}}>
                {
                  rows.map( (row, i) => {
                    columnsView = row.map( (image, j) => {
                      let icon = this.isSelected(image.key) ? <Image style={styles.selectedIcon} source={require('./assets/selected.png')}/> : null;
                      return <TouchableOpacity style={styles.column} key={image.key} onPress={ () => { this.clickImage(image.key) }} >
                        {icon}
                        <Image resizeMode='stretch' source={image.url} style={styles.logo} />
                      </TouchableOpacity>
                    });
                    
                    return <View style={styles.row}>{columnsView}</View>;
                  })
                }
              </View>
          </ScrollView>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    height: 120
  },
  column: {
    flex:1, 
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: '#fff',
  },
  item: {
    flex: 1
  },
  selectedIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex : 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5
  },
  logo: {
    flex: 1,
    width: null,
    height: 120
  },
  notification: {
    padding: 10,
    backgroundColor: 'yellow',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
