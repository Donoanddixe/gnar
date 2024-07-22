import axios from 'axios'

const SONG_INSTANCE = axios.create({
    baseURL: 'http://localhost:8099/api/'
})


export const getSongById = async id => {
    try {
        const res = await SONG_INSTANCE.get(`library/${id}`)
        return res.data
    } catch (error) { throw error }
}

export const deleteSongByID = async id => {
    try {
        const res = await SONG_INSTANCE.delete(`library/${id}`)
        return res.data
    } catch (error) { throw error }
}
export const updateSongById = async songRequest => {
    try {
        const res = await SONG_INSTANCE.put(`request/${songRequest._id}`, songRequest)
        return res.data
    } catch (error) { throw error }
}