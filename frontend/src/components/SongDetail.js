import React from 'react';
import { connect } from 'react-redux';
//import { selectSong } from '../actions';

const SongDetail = ({ tracksOfSong }) => {
    if (!tracksOfSong) {
        return <div>Select a song</div>
    }
    return <div>{tracksOfSong.albums.tracks.map((song) => {
        return (
            <div key={song.no}>
                <div className="content">{song.title}</div>
            </div>
        )
    })}</div>;
};

const mapStateToProps = (state) => {
    return { tracksOfSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
