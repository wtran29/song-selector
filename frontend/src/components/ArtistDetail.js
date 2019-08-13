import React from 'react';
import { connect } from 'react-redux';

const ArtistDetail = () => {
    return <div>Artist Detail</div>
}

const mapStateToProps = (state) => {
    return { artist: state.selectedArtist };
}

export default connect(mapStateToProps)(ArtistDetail);