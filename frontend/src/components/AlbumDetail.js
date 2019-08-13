import React from 'react';
import { connect } from 'react-redux';
import { selectSong, selectArtist, selectAlbum } from '../actions';

const AlbumDetail = ({ albumOfSong }) => {
    if (!albumOfSong) {
        return <div>Select an album</div>
    }
    return <div>{albumOfSong.albums.map((album) => {
        return (
            <div key={album.id}>
                <div className="left floated content">
                    <button
                        className="ui button secondary"
                        onClick={() => this.selectSong(album)}
                    >
                        Select: {album.name}
                    </button>
                </div>
                <img className="content" style={{ height: 25 + 'em' }} src={album.cover_art} alt="{album.name} cover" />
            </div>
        )
    })}</div>;
};

const mapStateToProps = (state) => {
    console.log(state);
    return { albumOfSong: state.selectedAlbum };
};

export default connect(mapStateToProps, { selectSong, selectArtist, selectAlbum })(AlbumDetail);