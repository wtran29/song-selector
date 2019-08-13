
export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    };
};

export const selectArtist = (artist) => {
    return {
        type: 'SELECT_ARTIST',
        payload: artist
    };
};

export const selectAlbum = (album) => {
    return {
        type: 'SELECT_ALBUM',
        payload: album
    };
};