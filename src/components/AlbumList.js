import React, { Component } from 'react'; 
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
            .then((res) => this.setState({ albums: res.data }));
    }

    renderAlbums() {
        const { albums } = this.state;

        return albums.map((album, i) => {
            return (
                <AlbumDetail key={i} album={album} />
            );
        });
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
