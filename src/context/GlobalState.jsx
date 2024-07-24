import { createContext, useState } from "react";



export const GlobalContext = createContext(null)




const GlobalState = ({ children }) => {
    const [searchData, setSearchData] = useState('')
    const [loading, setLoading] = useState(false)
    const [weather, setWeatherData] = useState(null)



    const getCurrentDate = ()=>{
        return new Date().toLocaleDateString('en_us' , {
            weekday:"long",
            month:"long",
            day:"numeric",
            year:"numeric",
            
        })
    }

    


    return <GlobalContext.Provider value={{getCurrentDate,weather, setWeatherData, loading, setLoading ,searchData, setSearchData }}>{children}</GlobalContext.Provider>
}



export default GlobalState;