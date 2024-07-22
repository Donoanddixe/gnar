import axios from 'axios'
import { React, useEffect } from 'react'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../context/userContext'
import { updateSongById, getSongById } from '../services/songReques.service'

export const GetGnarUpdate = () => {
    const { id } = useParams()
    // const { songRequest, SetSongRequest } = useContext(userContext)
    const [songRequest, setsongRequest] = useState({})

    const navigate = useNavigate()
    // const [style, setstyle] = useState('')
    // const [prompts, setprompts] = useState('')
    // const [requests, setrequests] = useState('') these are not being used

    useEffect(() => {
        console.log('lemme see this', id)
        getSongById(id)
            .then(res => setsongRequest(res))
    }, [id])

    const updateSong = (e) => {
        e.preventDefault()
        console.log('you made it into the update hanlder', songRequest)
        updateSongById(songRequest)//this is passing an id to a function that wants a song request which has an _id as a key
            .then(() => {
                navigate('/library')
            })
            .catch((err) => {
                console.log("ERROR:", err)
            })
    }

    // songRequestInState = {
    //     style: 'countrey',
    //     prompts: 'steel guitar',
    //     requests: 'wuote that only song by Alend Jackson',
    // }
    // songRequestInState = 'countrey'

    return (
        <div>
            <p>style: {songRequest.style}</p>
            <h2>Update your song request here!</h2>
            <p>Have fun!</p>
            <form onSubmit={updateSong}>
                <label> Song Style?
                    {/* YOU ARE HERE BEING STUPID */}
                    {/* instead of setstyle use setsongRequest, and update this key within it. the same for the following inputs */}
                    <input type="text" name='style' value={songRequest.style} onChange={(e) => setsongRequest(prev => ({ ...prev, style: e.target.value }))} />
                </label>
                <label>Prompts:
                    <textarea type="textarea" name='prompts' value={songRequest.prompts} rows='2' cols='30' onChange={(e) => setsongRequest(prev => ({ ...prev, prompts: e.target.value }))} ></textarea>
                </label>
                <label>Additional Requests:
                    <textarea type="textarea" name='requests' value={songRequest.requests} rows='2' cols='30' onChange={(e) => setsongRequest(prev => ({ ...prev, requests: e.target.value }))} ></textarea>
                </label>
                <button type='submit' >Update Song Request</button>
                {/* pass your submit handler in the button this will match your request route */}
            </form>
        </div>
    )
}
