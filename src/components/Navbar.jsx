import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import auth from '../config/firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = ({ bg }) => {

    const navigate = useNavigate() 

    const deconnexion = () => {
      
      signOut(auth)

      onAuthStateChanged(auth, (currentUser) => {
        if(!currentUser){
          navigate('/login')
        }
      })

    }

    return (
      <Container bg={ bg }>
        <NavbarContainer>
          <div className="navbar-left">
            <h2><Link to="/">AffaliBox</Link></h2>
            <div className="links">
              <Link to="/">Accueil</Link>
              <Link to="/films">Films</Link>
              <Link to="/tv">TV</Link>
              <Link to="/playlist">Playlist</Link>
            </div>
          </div>
          <div className="navbar-right">
            <FaSearch cursor="pointer" color="#fff" size="24" />
            <FaPowerOff cursor="pointer" color="red" size="24" onClick={ deconnexion } />
          </div>
        </NavbarContainer>
      </Container>
    );
}

export default Navbar;

const Container = styled.div`
    position: sticky;
    top: 0;
    height: 80px;
    background-color: ${props => props.bg };
    transition: 0.4s ease-in-out;
`;

const NavbarContainer = styled.div`
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .navbar-left{
        display: flex;
        align-items: center; 
        column-gap: 3rem;
        backgroung-color: white;
    }
    .navbar-left a{
        color: #fff;
        text-decoration: none;
        font-weight: bold; 
    }
    .links{
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }
    .links a{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
    .navbar-right{
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }
`;
