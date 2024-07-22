import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { userContext } from '../context/userContext'
import axios from 'axios'
import { deleteSongByID, getSongById } from '../../../server/controllers/userSongRequest.controller'
// import { S3Client } from "@aws-sdk/client-s3"

// export const Library = ({ filename, type }) => { saving this as these should be the params
export const Library = () => {


    // const [userSong, setuserSong] = useContext(userContext) // idk how tf to render request submisison
    const [allSongs, setAllSongs] = useState([])

    useEffect(() => {
        // console.log('You made it into this bit. why no data?')//dsstill herre
        axios.get('http://localhost:8099/api/library')
            // getAllSongs()

            .then((res) => setAllSongs(res.data))
            .catch((error) => console.log(error))

    }, [])


    // TBD where my bucket goes. 
    // const config = {
    //     bucketName: 'your-bucket-name',
    //     region: 'us-east-1', // Adjust region
    // };

    // const client = new S3Client(config);
    // Adjust objectKey based on video/audio
    // const objectKey = type === 'video' ? `${filename}.mp4` : `${filename}.mp3`;



    return (<>

        <div >
            <table>
                <tbody>
                    <tr >
                        <th>Style</th>
                        <th>Prompts</th>
                        <th>Additional Requests</th>
                    </tr>
                    {
                        allSongs.map(({ style, prompts, requests, _id }) => (
                            <tr className='songRequests' key={_id}>
                                <td>{style}</td>
                                <td>{prompts}</td>
                                <td>{requests}</td>
                                <td>|
                                    <Link to={`/request/${_id}`}><button>update request</button></Link>
                                </td>
                                <td><Link to={`/library/${_id}`}><button >delete request</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </>


    )
}
