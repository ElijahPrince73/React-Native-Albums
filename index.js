// import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create component
const App = () => {
    return (
        // Using flex: 1 allows the bottom element isn't cutoff
        <View style={{ flex: 1 }}>
            <Header headerText='Albums' />
            <AlbumList />
        </View>
    );
};

// render to device
AppRegistry.registerComponent('albums', () => App);
