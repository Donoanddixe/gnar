import { createContext, useState } from "react"

export const userContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [songRequest, SetSongRequest] = useState({})
    const [allSongs, setAllSongs] = useState([]) // I don't understand why this works in my library

    const storeIdinLocalStorage = (id) => {
        window.localStorage.setItem('Logged in user id', id)
    }
    // you can use just 'uuid" in that setItem param instead


    return (
        // you are wrapping your whole app with UserProvider so the entire application 
        // at any time can have access to the values passed into that provider user, setUser in this case
        <userContext.Provider
            value={{
                user, setUser,
                storeIdinLocalStorage,
                songRequest, SetSongRequest,
                allSongs, setAllSongs
            }}>
            {props.children}
        </userContext.Provider>
    )
}