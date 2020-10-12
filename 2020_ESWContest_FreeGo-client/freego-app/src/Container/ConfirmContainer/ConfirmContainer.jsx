import React, {useState, useEffect} from 'react';
import { Logo5 } from '../../Components';
import styled from 'styled-components';
import './ConfirmContainer.scss';
import SelfRegisterContainer from '../SelfRegisterContainer/SelfRegisterContainer.jsx';
import axios from 'axios';
import Modal from 'react-modal';
import { UseFreegoState } from '../../Redux/Context/Context';

function ConfirmContainer( {history} ) {

    const state = UseFreegoState();
    const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
	  setIsOpen(true);
	}
   
	function closeModal(){
	  setIsOpen(false);	
    }

   
    const id = localStorage.getItem('id');
    const code = "nocode";

    const customStyles = {
	    content : {
	     width: '300px',
	     height: '220px'
	    }
     };
    return(
        <>
            <Logo5/>

            <div className="ImageContainer">

            </div>
            <Modal
          		isOpen={modalIsOpen}
          		onRequestClose={closeModal}
         		style={customStyles}
				contentLabel="Example Modal"
				className="Modal">
					<div className="TextDelete">해당 상품이 이미 존재합니다.</div>
					<button type="button" className="Confirm" onClick={closeModal}>확인</button>
			</Modal>

            <div className="CFName">{state.PName}</div>
            <div className="CFDay">{state.Dday}</div>

            <button type="button" className="Checkbtn" onClick={Insert}>확인</button>
        </>
    )

    function Insert() {
            axios.post(`/material/insert?code=${code}`, {
            id: id,
            p_name: state.PName,
            p_number: 3,
            p_ex_date: state.Dday
        })
        .then(function (response) {
            switch(response.data.code) {
                case 200: history.push('/MainContainer'); break;
                case 404: {
                    if(response.data.message === "fail") {
                        console.log("fail");
                    } else {
                        openModal();
                    }
                }
            }
        })
           
            
        
    }
}

export default ConfirmContainer;