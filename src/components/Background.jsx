import React from 'react';
import styled from 'styled-components';
import fille from '../assets/femme.mp4';

const Background = () => {
    return (
        <Container>
            <video src={ fille } autoPlay={true} muted loop></video>
        </Container>
    );
}

export default Background;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
`;
