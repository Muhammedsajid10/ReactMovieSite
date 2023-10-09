import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { movieContext } from './Context/ContextPovider';

const NAV = () => {
  const navigate = useNavigate()
  const {movie, setMovie} = useContext(movieContext)
  const [search, setSearch] = useState('')
  
  const navigationLatestMovie = () => {
    navigate('/')
  }
  const navigatePopularMovie = () => {
    navigate('/PopularMovie')
  }
  const navigateComedyMovie = () => {
    navigate('/comedyMovie')
  }

  const searchHandle = () => {
    const searchData = movie.filter((item=>item.title.toLowerCase().includes(search.toLowerCase())))
    setMovie(searchData)

  }



  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/" style={{fontSize:"26px",fontWeight:"bold"}}>ViewVivid</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
              {/* <Nav.Link><Link className='link' to='/LatestMovie'>Latest Movie</Link></Nav.Link>
              <Nav.Link><Link className='link' to='/PopularMovie'>Popular Movie</Link></Nav.Link>
              <Nav.Link><Link className='link' to='/comedyMovie'>Comedy Movie</Link></Nav.Link> */}



              <Nav.Link onClick={navigationLatestMovie}>Latest Movie</Nav.Link>
              <Nav.Link onClick={navigatePopularMovie}>Popular Movie</Nav.Link>
              <Nav.Link onClick={navigateComedyMovie}>Comedy Movie</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <Button variant="outline-success" onClick={searchHandle}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NAV