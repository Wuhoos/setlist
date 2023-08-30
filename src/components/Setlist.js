import React from 'react'
import Song from './Song';

function Setlist({songSetList, removeFromSetList}) {

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {songSetList.map(song => <Song key={song.id} song={song} addSongToSetList={removeFromSetList} />)}
        </div>
        </>
    );
}

export default Setlist;