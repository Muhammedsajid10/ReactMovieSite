import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IMAGE_URL } from '../Constants/Contstants';
import { movieContext } from '../Context/ContextPovider';
import './MovieDetails.css'

const MovieDetails = () => {
    const { movieId } = useContext(movieContext)
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }

    return (
        <div className="movie-details-container">
            <div className="row">
                <div className="col-md-5">
                    <div className='img'><img  style={{ width:"18rem" }} src={IMAGE_URL + movieId.poster_path} alt="" /></div>
                </div>
                <div className="col-md-7 movieDetails">
                    <h1>{movieId.title}</h1>
                    <label>Release Data</label>
                    <h3>{movieId.release_date}
                    </h3>
                    <label>Overview</label>
                    <h3>{movieId.overview}</h3>
                    <button className='btn' onClick={goToHome}>Go to Home</button>
                   
                </div>
            </div>



        </div>
    );


};

export default MovieDetails;
