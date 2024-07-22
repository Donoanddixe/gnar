import axios from 'axios'
import { React } from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/userContext'

export const GetGnar = () => {
    // const { userSong, SetUserSong } = useContext(userContext)
    const { songRequest, SetSongRequest } = useContext(userContext)
    const navigate = useNavigate()
    const [style, setstyle] = useState('')
    const [prompts, setprompts] = useState('')
    const [requests, setrequests] = useState('')



    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8099/api/request', { style, prompts, requests })
            .then((res) => {
                SetSongRequest(res.data)
                navigate('/library')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // need submit handler .post to match userSongRequest.controller
    // once submit handler is triggered, user is redirected to their library and 
    // request shows up in queue along with any existing downloads?
    // you set this up in your back end already. lethargic ska, never forget. set this up in your front end
    return (
        <div>
            <h2>Submit your song request here!</h2>
            <p>Prepare to get gnar</p>
            <form onSubmit={submitHandler}>
                <label> Song Style?
                    <input type="text" name='style' placeholder='song style' onChange={(e) => setstyle(e.target.value)} />
                </label>
                <label>Prompts:
                    <textarea type="textarea" name='prompts' placeholder='enter prompts here' rows='2' cols='30' onChange={(e) => setprompts(e.target.value)} ></textarea>
                </label>
                <label>Additional Requests:
                    <textarea type="textarea" name='requests' placeholder='additional requests' rows='2' cols='30' onChange={(e) => setrequests(e.target.value)} ></textarea>
                </label>
                <label>photos:
                    <input type="file" name='photos' placeholder='upload photo here' rows='2' cols='30' onChange={(e) => setrequests(e.target.value)} ></input>
                </label>
                {/* don't fuck up yet. Do this right, set up your model and controller for photos. */}
                <button type='submit'>Submit Song Request</button>
                {/* pass your submit handler in the button this will match your request route */}
            </form>
        </div>
    )
}
