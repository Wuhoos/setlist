import React from 'react'
import Song from './Song';

function SongList({songList, addSongToSetList, deleteSong}) {

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {songList.map(song => <Song song={song} key={song.id} addSongToSetList={addSongToSetList} deleteSong={deleteSong} />)}
        </div>
        </>
    );
}

export default SongList;