import React, {useState, useEffect} from 'react'
import SongList from './SongList';
import Setlist from './Setlist';


function SetlistBuilder() {

    const [songList, setSongList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(songList => setSongList(songList))
    }, [])


    const [songSetList, setSongSetList] = useState([])

    const addSongToSetList = (id) => {
        console.log(id)
       const selectedSong = songList.filter(song => {
            if(song.id === id && !songSetList.find(song => song.id === id)) {
                return true
            }
        })
        setSongSetList([...songSetList, ...selectedSong])
    }

    const removeFromSetList = (id) => {
        const setListRemove = songSetList.filter(song => song.id !== id)
        console.log(setListRemove)
        setSongSetList(setListRemove)
    }

    const deleteSong = (id) => {
        fetch(`http://localhost:3110/tracks/${id}`, {
            method: "DELETE",
        })
        .then(res => {
            if(res.ok){
                setSongList(songList.filter(song => {
                    return song.id !== id
                }))
            }
        })

    }


    return(
        <div className="builder">
            <SongList songList={songList} addSongToSetList={addSongToSetList} deleteSong={deleteSong} />
            <div className="vl"></div>
            <Setlist songSetList={songSetList} removeFromSetList={removeFromSetList} />
        </div>
    );
}

export default SetlistBuilder;