import React, { createContext, useState } from 'react'

const movieContext = createContext()
const ContextPovider = ({children}) => {
    const [movieId, setMovieId] = useState({})
    const [movie, setMovie] = useState([])
  return (
    <div>
      <movieContext.Provider value={{movieId, setMovieId,movie,setMovie}}>
        {children}
      </movieContext.Provider>
    </div>
  )
}

export default ContextPovider
export {movieContext}
