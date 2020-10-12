import React, { useState } from 'react';
import { Logo3 } from '../../Components';
import styled from 'styled-components';
import './RegisterContainer.scss';
import axios from 'axios';
import { baseUrl } from '../../service/endpoint.jsx';

const RegisterButton = styled.button`
    position: absolute;
    left: 124px;
    top: 600px;
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

const InputId = styled.input`
    position: absolute;
    left: 94px;
    top: 280px;

    ime-mode: disabled;
`;

const InputPs = styled.input`
    position: absolute;
    left: 94px;
    top: 350px;
`;

const InputPsCheck = styled.input`
    position: absolute;
    left: 94px;
    top: 430px;
`;

const UnCorrect = styled.div`
    position: absolute;
    top: 480px;
    left: 90px;

    visibility: hidden;
    color: red;
`;

const Blank = styled.div`
    position: absolute;
    top: 395px;
    left: 93px;

    visibility: hidden;
    color: red;
`;
const IdBlank = styled.div`
    position: absolute;
    top: 325px;
    left: 93px;

    visibility: hidden;
    color: red;
`;

const IdExist = styled.div`
    position: absolute;
    top: 325px;
    left: 93px;

    visibility: hidden;
    color: red;
`;

function RegisterContainer( {history} ) {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    
    const onChangeId = e => {
        setId(e.target.value);
    }
    const onChangePwd = e => {
        setPwd(e.target.value);
    }
    const onChangeCpwd = e => {
        setCpwd(e.target.value);
    }
    
    return(
        <>
            <Logo3/>
            <form>
                <InputId type="text" placeholder="ID" className="Input" value={id} onChange={onChangeId} maxLength="12"/>
                <InputPs type="password" placeholder="Password" className="Input" value={pwd} onChange={onChangePwd} maxLength="15" minLength="8"/>
                <InputPsCheck type="password" placeholder="Password Check" className="Input" value={cpwd} onChange={onChangeCpwd} maxLength="15" minLength="8"/>
            </form>
            <IdBlank id="idBlank">아이디를 입력하세요!</IdBlank>
            <UnCorrect isCorrect="show" id="uc">비밀번호가 일치하지 않습니다!</UnCorrect>
            <Blank id="blank">비밀번호를 입력하세요!</Blank>
            <IdExist id="idExist">아이디가 이미 존재합니다!</IdExist>

            <RegisterButton onClick={RegisterButtonOnClick}>회원가입 &gt;</RegisterButton>          
        </>
    );

    function RegisterButtonOnClick() {
        var uc = document.getElementById("uc");
        var blank = document.getElementById("blank");
        var idBlank = document.getElementById("idBlank");
        var idExist = document.getElementById("idExist");

        if(id == "") {
            idBlank.style.visibility="visible";
        } else {
            idBlank.style.visibility="hidden";
        }
        if(pwd == "" || cpwd == "") {
            blank.style.visibility='visible';
            uc.style.visibility='hidden';
            return;
        } else {
            blank.style.visibility='hidden';
        }
        if(pwd != cpwd) {
            uc.style.visibility='visible';
            return;
        }

        localStorage.setItem('id', id);
        localStorage.setItem('pwd', pwd);

        axios.post("/auth/register", {
            "id": id,
            "pwd": pwd
        })
        .then(function (response) {
            //console.log(response);
            switch(response.data.code) {
                case 400: idExist.style.visibility='visible'; return;
                case 200: history.push('/WelcomeContainer'); return;
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
}


export default RegisterContainer;