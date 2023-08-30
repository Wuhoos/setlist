import React from 'react'

function Song({song, addSongToSetList, deleteSong}) {



    return(
        <div className="song" onClick={()=> addSongToSetList(song.id)}>
            <img src={song.image}/>
            <div className="song-info">
                <h3>{song.song}</h3>
                <h4>{song.artist}</h4>
            </div>
            <button onClick={()=> deleteSong(song.id)}>X</button>
        </div>
    );
}

export default Song;