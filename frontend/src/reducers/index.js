import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            'id': 1,
            'artist': 'Lil Wayne',
            'albums': [
                {
                    'id': 1,
                    'name': 'Dedication 6',
                    'cover_art': 'https://i.imgur.com/4JmIObL.jpg',
                    'tracks': [
                        { 'no': 2, 'title': 'Everyday We Sick', 'length': '4:48' },
                        { 'no': 5, 'title': '5 Star (featuring Nicki Minaj)', 'length': '4:47' },
                        { 'no': 6, 'title': 'Bank Account', 'length': '4:04' },
                        { 'no': 9, 'title': 'Young', 'length': '3:06' },
                    ]
                },
                {
                    'id': 2,
                    'name': 'Dedication 6: Reloaded',
                    'cover_art': 'https://img.discogs.com/1vlArFefkq24fRndESpsZa1Oxc0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11625282-1519678527-2437.jpeg.jpg',
                    'tracks': [
                        { 'no': 6, 'title': 'Family Feud', 'length': '5:54' },
                        { 'no': 9, 'title': 'Gumbo (featuring Gudda Gudda)', 'length': '2:55' },
                        { 'no': 13, 'title': 'Groupie Gang', 'length': '3:37' },
                        { 'no': 20, 'title': 'Blood Mary', 'length': '5:14' },
                    ]
                },
            ]
        },
        {
            'id': 2,
            'artist': 'Eminem',
            'albums': [
                {
                    'id': 1,
                    'name': 'Kamikaze',
                    'cover_art': 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg',
                    'tracks': [
                        { 'no': 1, 'title': 'The Ringer', 'length': '5:37' },
                        { 'no': 7, 'title': 'Stepping Stone', 'length': '5:09' },
                        { 'no': 8, 'title': 'Not Alike', 'length': '4:48' },
                        { 'no': 9, 'title': 'Kamikaze', 'length': '3:36' },
                    ]
                },
            ]
        },
        {
            'id': 3,
            'artist': 'The Killers',
            'albums': [
                {
                    'id': 1,
                    'name': 'Hot Fuss',
                    'cover_art': 'https://www.udiscovermusic.com/wp-content/uploads/2019/06/The-Killers-Hot-Fuss-album-cover-820.jpg',
                    'tracks': [
                        { 'no': 2, 'title': 'Mr. Brightside', 'length': '3:43' },
                        { 'no': 3, 'title': 'Smile Like You Mean It', 'length': '3:54' },
                        { 'no': 4, 'title': 'Somebody Told Me', 'length': '3:17' },
                        { 'no': 5, 'title': "All These Things That I've Done", 'length': '5:01' },
                    ]
                },
            ]
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload
    }
    return selectedSong
};

const selectedArtistReducer = (selectedArtist = null, action) => {
    if (action.type === 'SELECT_ARTIST') {
        return action.payload
    }
    return selectedArtist
};

const selectedAlbumReducer = (selectedAlbum = null, action) => {
    if (action.type === 'SELECT_ALBUM') {
        return action.payload
    }
    return selectedAlbum
};

export default combineReducers({
    songs: songsReducer,
    selectedArtist: selectedArtistReducer,
    selectedAlbum: selectedAlbumReducer,
    selectedSong: selectedSongReducer
});