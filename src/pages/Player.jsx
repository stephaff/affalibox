import React from 'react';
import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import fille from '../assets/fille.mp4';

const Player = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <span>
                <FaLongArrowAltLeft color='white' size="60" cursor="pointer" onClick={ () => navigate(-1) } />
            </span>
            <video src={ fille } autoPlay muted controls></video>
        </Container>
    );
}

export default Player;

const Container = styled.div`
    height: 100vh;
    width : 100vw;
    overflow-y: hidden;
    span{
        position: absolute;
        top: 1rem;
        left: 2rem;
        z-index: 1;
    }
    video{
        height: 100%;
        width : 100%;
        object-fit: cover;
    }
`;
