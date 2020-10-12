import React from 'react';
import Logo from '../../Components/Logo2/Logo2';
import './LoginRegisterContainer.scss';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterButton = styled.button`
    position: absolute;
    left: 137px;
    top: 550px;
    border-radius: 30px;
	width: 210px;
	height: 63px;
	background: hsl(216, 100%, 55%);

	font-family: 'Roboto', sans-serif;
	font-size: 22px;

    color: #ffffff;
    
    border: 0;
    outline: none;
`;

const LoginButton = styled.button`
    position: absolute;
    left: 137px;
    top: 450px;
    border-radius: 30px;
	width: 210px;
	height: 63px;
	background: hsl(216, 100%, 55%);

	font-family: 'Roboto', sans-serif;
	font-size: 22px;

    color: #ffffff;
    border: 0;
    outline: none;
`;

function LoginRegisterContainer( {history} ) {
    return(
        <div className="LoginRegisterContainer">
            <Logo/>

            <LoginButton onClick={()=> {history.push('/LoginContainer')}}>로그인&nbsp;&gt;</LoginButton>
            <RegisterButton onClick={()=> {history.push('/RegisterContainer')}}>회원가입&nbsp;&gt;</RegisterButton>
        </div>
    )
}

export default LoginRegisterContainer;