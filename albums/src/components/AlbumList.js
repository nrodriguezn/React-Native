import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

// 1/3 state the componentW
state = { albums: [] };

componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ albums: response.data }));  // 2/3, entrego la data al state
}

renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  ); //map its an array helper
}

  render() {
    console.log(this.state);
    return (
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
