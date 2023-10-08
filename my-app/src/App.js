import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from './Components/NAV';
import Movie from './Components/Movies/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/Movies/MovieDetails';
import {comedyMovie, latestMovie, popularMovie } from './URLS/Urls';
import Banner from './Components/Banner/Banner';
import './App.css'

function App() {
  return (
    <div className="App">


      {/* <BrowserRouter>
        <NAV />
        <Routes>
          <Route path='/Movie' element={<Movie />} />
          <Route path='/showMovieDetails' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter> */}


      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<><NAV/><Banner/><Movie url={latestMovie} /></>} />
          <Route path='/PopularMovie' element={<><NAV/><Banner/><Movie url={popularMovie} /></>} />
          <Route path='/comedyMovie' element={<><NAV/><Banner/><Movie url={comedyMovie} /></>} />
          <Route path='/showMovieDetails' element={<><NAV/><MovieDetails /></>} />
          

        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
