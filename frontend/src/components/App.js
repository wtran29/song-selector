import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import AlbumDetail from './AlbumDetail';

class App extends Component {
    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide App">
                        <h3 style={{ paddingTop: 1.5 + 'em' }}>Artists</h3>
                        <SongList />
                    </div>
                    
                    <div className="column eight wide">
                        <h3 style={{ paddingTop: 1.5 + 'em' }}>Albums</h3>
                        <AlbumDetail/>
                    </div>
                    
                </div>
                <div className="ui row">
                    <div className="column eight wide">
                        <h3>Tracks</h3>
                        <SongDetail />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
