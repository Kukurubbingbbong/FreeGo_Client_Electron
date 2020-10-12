import Axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';
import { Logo3 } from '../../Components';
import './LoginContainer.scss';
import axios from 'axios';
import { baseUrl } from '../../service/endpoint.jsx';

const LoginButton = styled.button`
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
`;

const InputPs = styled.input`
    position: absolute;
    left: 94px;
    top: 380px;
`;

function LoginContainer( {history} ) {

    
    const [id, setId] = useState(localStorage.getItem('id') || '');
    const [pwd, setPwd] = useState(localStorage.getItem('pwd') || '');
    
    const onChangeId = e => {
        setId(e.target.value);
    }
    const onChangePwd = e => {
        setPwd(e.target.value);
    }

    return(
        <>
            <Logo3/>

            <form>
                <InputId type="text" placeholder="ID" className="Input" value={id} onChange={onChangeId}/>
                <InputPs type="password" placeholder="Password" className="Input" value={pwd} onChange={onChangePwd}/>
            </form>
            <div className="IdNotFound" id="IdNotFound">아이디가 존재하지 않습니다.</div>
            <div className="IdNotInput" id="IdNotInput">아이디를 입력하세요.</div>
            <div className="PwdNotFound" id="PwdNotCorrect">비밀번호가 일치하지 않습니다.</div>
            <div className="PwdNotInput" id="PwdNotInput">비밀번호를 입력하세요.</div>

            <LoginButton onClick={OnClick}>로그인 &gt;</LoginButton>
        </>
    )

    function OnClick() {
        var IdNotFound = document.getElementById("IdNotFound");
        var IdNotInput = document.getElementById("IdNotInput");
        var PwdNotFound = document.getElementById("PwdNotCorrect");
        var PwdNotInput = document.getElementById("PwdNotInput");

        if(id == "") {
            IdNotInput.style.visibility="visible";
            PwdNotInput.style.visibility="hidden";
            return;
        } else {
            IdNotInput.style.visibility="hidden";
        }

        if(pwd == "") {
            PwdNotInput.style.visibility="visible";
            return;
        } else {
            PwdNotInput.style.visibility="hidden";
        }

        axios.post("/auth/login", {
            id: id,
            pwd: pwd
        })
        .then(function (response){
            console.log(response.data.message);
            
            switch(response.data.message) {
                case "login success": 
                if(localStorage.getItem('id')===''){
                    localStorage.setItem('id', id);
                    localStorage.setItem('pwd', pwd);
                }
                history.push('/MainContainer');
                break;

                case "pwd is wrong": PwdNotFound.style.visibility = "visible"; break;
                case "id not found": IdNotFound.style.visibility = "visible"; break;
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        
        
    }

}

export default LoginContainer;