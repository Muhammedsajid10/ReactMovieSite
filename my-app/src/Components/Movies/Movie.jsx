import React, { createContext, useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { IMAGE_URL } from '../Constants/Contstants';
import './Movie.css'
import { Link, useNavigate } from 'react-router-dom'
import { movieContext } from '../Context/ContextPovider';



// const ComedyMovie = () => {
const Movie = (props) => {
    const [movie, setMovie] = useState([])
    const [hoverMovie, setHoverMovie] = useState(null)
    const navigate = useNavigate()
    const { movieId, setMovieId } = useContext(movieContext)

    const fetchingMovie = async () => {
        // const response = await axios.get(comedyMovie)
        const response = await axios.get(props.url)
        console.log('moviess', response.data.results);
        setMovie(response.data.results)
    }
    useEffect(() => {
        fetchingMovie()

    }, [])

    const handleMouseEnter = (obj) => {
        setHoverMovie(obj)
    }
    const handleMouseLeave = () => {
        setHoverMovie(null)
    }

    const movieDetails = async (obj) => {
        setMovieId(obj)
        if (movieId.id) {
            navigate('/showMovieDetails')
        }



    }



    return (
        <div className="card-container">

            {movie.map((obj) => (
                <Card key={obj.id}
                    style={{
                        width: '18rem', margin: "20px"
                    }}
                    onMouseEnter={() => handleMouseEnter(obj)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Card.Img variant="top" src={IMAGE_URL + obj.backdrop_path} alt="" onClick={() => movieDetails(obj)} />

                    {/* <Card.Body>
                    <Card.Title>{obj.name}</Card.Title>
                </Card.Body> */}
                    {/* {hoverMovie === obj && (
                    <div className='movieDetailss'>
                        <div className='movieTitile'>{obj.name}</div>
                    </div>
                )} */}


                </Card>
            ))
            }


        </div>
    )
}

export default Movie
















