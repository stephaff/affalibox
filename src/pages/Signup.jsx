import React, { useState } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import auth from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [displayBtnInscription, setDisplayBtnInscription] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const inscription = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(()=>
                console.log("connecté")
            )
            .catch(()=>
                console.log('erreur')
            )

        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                navigate('/')
            }
        })
    }

    return (
        <Container>
            <Background />
            <SignupContent>
                <SignupContentTop>
                    <h1>AffaliBox</h1>
                    <button onClick={ () => navigate('/login') }>Connexion</button>
                </SignupContentTop>
                <SignupContentBottom>
                    <h2>Retrouvez les meilleurs films chez <span className='affaliBox'>AffaliBox</span></h2>
                    <p>Soyez au bon endroit au bon moment</p>
                    <Formulaire>
                        <div className="inputs">
                            <input className='email' type="email" placeholder='Entrer votre email' onChange={ (e) => setEmail(e.target.value ) } />
                            <input className={displayBtnInscription? 'display-password': 'password' } type="password" placeholder='Entrer votre mot de passe' onChange={ (e) => setPassword(e.target.value ) } />
                            {displayBtnInscription? '': <button className='btn-rejoindre' onClick={ () => setDisplayBtnInscription(true) } >Rejoignez-nous</button>}
                        </div>
                        <button className={ displayBtnInscription? 'btn-inscription' : 'btn-inscription-0' } type="submit" onClick={ inscription }>S'incrire</button>
                    </Formulaire>
                </SignupContentBottom>
            </SignupContent>
        </Container>
    );
}

export default Signup;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
`;

const SignupContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignupContentTop = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        color: white;
    }
    button{
        font-size: 16px;
        color: #fff;
        padding: 5px 15px;
        background-color: #F49AC2;
        border: 2px solid #fff;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const SignupContentBottom = styled.div`
    padding-top: 5rem;
    h2{
        color: #F49AC2;
        font-size: 36px;
    }
    .affaliBox{
        color: #fff;
        font-size: 36px;
    }
    p{
        color: #fff;
        font-weight: bold;
        margin-top: 2rem;
    }
`;

const Formulaire = styled.div`
    margin-top: 2rem;
    .inputs{
        background-color: transparent;
    }
    .email{
        padding: 0 1rem;
        height: 45px;
        width: 300px;
        outline: none;
        border: none;
    }
    }
    .password{
        padding: 0;
        height: 45px;
        width: 0;
        outline: none;
        border: none;
        opacity: 0;
        visibility: hidden;
    }
    .display-password{
        padding: 0 1rem;
        height: 45px;
        width: 300px;
        outline: none;
        border: none;
        margin-left: 2px;
        opacity: 1;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }
    .btn-rejoindre{
        color: #fff;
        height: 45px;
        padding: 0 60px; 
        background-color: #F49AC2;
        border: 2px solid #F49AC2;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
    }
    .btn-inscription-0{
        color: #fff;
        height: 45px;
        padding: 0 60px;
        margin: 1rem 200px;
        visibility: hidden;
        opacity: 0;
    }
    .btn-inscription{
        color: #fff;
        height: 45px;
        padding: 0 60px; 
        background-color: #F49AC2;
        border: 2px solid #F49AC2;
        cursor: pointer;
        margin: 1rem 200px;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
    }
`;
