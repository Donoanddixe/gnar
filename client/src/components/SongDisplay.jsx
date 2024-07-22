import { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getSongById, deleteSongByID } from "../services/songReques.service.js"
import axios from "axios"


export const SongDisplay = () => {
    // console.log('can you see this')
    const navigate = useNavigate()
    const { id } = useParams()
    const [songRequest, SetSongRequest] = useState({})


    useEffect(() => {
        // console.log('lemme see this', id)
        getSongById(id)
            .then(res => SetSongRequest(res))
    }, [id])

    const deleteSong = id => {
        deleteSongByID(id)
            .then(() => navigate('/library'))
        alert('Clicking "OK" will delete youre request, you sure?')
    }

    return (<>
        <div>
            <p>This is the id: {id}</p>
            <p>Style: {songRequest.style}</p>
            <p>Prompts: {songRequest.prompts}</p>
            <p>Additional requests: {songRequest.requests}</p>
            <button onClick={() => deleteSong(id)}>Delete Request</button>
        </div>
    </>)
}