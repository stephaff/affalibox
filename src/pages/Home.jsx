import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { API_KEY } from '../config/CONSTANTES';
import { useDispatch } from 'react-redux';
import getGenres from '../redux/actions'

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isScrooll, setIsScrooll] = useState(false);
    console.log(`${API_KEY}`)

    window.onscroll = () => {
        if(window.pageYOffset === 0){
            setIsScrooll(false)
        }
        else{
            setIsScrooll(true)
        }
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            .then(res => 
                res.json()    
            )
            .then(json => {
                console.log(json) 
                dispatch(getGenres(json))   
            } 
            )
        
    }, []);

    return (
        <Container>
            <Background />
            <div className="content">
                <Navbar bg={ isScrooll? "black": "transparent" } />
                <div className="movie-informations">
                    <h2>La vie est belle</h2>
                    <p>film romantique</p>
                    <div className="buttons">
                        <button className='btn-play' onClick={ () => navigate('/player')}> <FaPlay /> Jouer</button>
                        <button className='btn-more'>Plus ...</button>
                    </div>
                </div>
            </div>
            <h1>OK</h1>
            <h1>OK</h1><h1>OK</h1><h1>OK</h1><h1>OK</h1><h1>OK</h1><h1>OK</h1><h1>OK</h1><h1>OK</h1>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    background-color: #000;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .movie-informations{
        width: 85%;
        margin: 20rem auto;
        h2{
            color: #fff;
            font-size: 60px;
        }
        p{
            color: #fff;
            font-size: 40px; 
        }
        .buttons{
            margin-top: 2rem;
            button{
                padding: 8px 25px;
                font-size: 20px;
                font-weight: bold;
                border: none;
                border-radius: 4px;
            }
            .btn-play{
                margin-right: 0.7rem;
                cursor: pointer;
                &:hover{
                    filter:brightness(80%)
                }
            }
            .btn-more{
                filter:brightness(50%)
            }
        }
    }
`;
