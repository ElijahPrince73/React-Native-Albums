// import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create component
const App = () => {
    return (
        <Header />
    );
};

// render to device
AppRegistry.registerComponent('albums', () => App);
