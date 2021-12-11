import {createContext,useContext, useState} from 'react'
import useSWR from 'swr'


const StateContext = createContext()

export default function GlobalContext ({children}) {

     //  ----set ALert -------
     const [alert, setAlert] = useState({message: '', type: ''})
     const {data: user} = useSWR(() => !user ? `/profile` : '' , {revalidateOnFocus: true, initialData: null})
     
    return (
        <StateContext.Provider value= {{ alert, setAlert, user }}>
            {children}
        </StateContext.Provider>
    )
}

export const GlobalState = () => useContext(StateContext)