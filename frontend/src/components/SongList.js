import React from 'react';
import { connect } from 'react-redux';
import { selectSong, selectArtist, selectAlbum } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.id}>
                    <div className='right floated content'>
                        <button
                            className='ui button primary'
                            onClick={() => this.props.selectAlbum(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.artist}</div>
                    
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong, selectArtist, selectAlbum })(SongList);