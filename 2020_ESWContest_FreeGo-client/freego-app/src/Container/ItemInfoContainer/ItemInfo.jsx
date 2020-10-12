import React, {useState, useEffect} from 'react';
import '../MainContainer/MainContainer.scss';
import Modal from 'react-modal';
import axios from 'axios';
import { Link, Route, withRouter } from 'react-router-dom';
import { namesend } from '../../Redux/Actions/NameDay';
import { UseFreegoDispatch } from '../../Redux/Context/Context';

function ItemInfo( {history} ) {
	const id = localStorage.getItem('id');
	
	const [modalIsOpen, setIsOpen] = useState(false);
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		function Reference() {
			axios.get(`/material/show/${id}`, {
			})
			.then(function (response){
				console.log(response.data.data);
				setItemList(response.data.data);
			})
		}
		
		Reference();
		Modal.setAppElement('body');
		
	}, [])

	function openModal() {
	  setIsOpen(true);
	}
   
	function closeModal(){
	  setIsOpen(false);	
    }
    function TimeCalculator(time) {
        const Date = new Date();
        const CurrentTime = time.replace(/,/g, '');
    }

	const dispatch = UseFreegoDispatch()

	const ChangeDetail = (name) => {
		dispatch(namesend(name));
		 //history.push('/DetailContainer');
	}
	
    const customStyles = {
	    content : {
	     width: '300px',
	     height: '220px'
	    }
     };
	
	 const List = itemList.map(item => (
		<div className="Product">
		<div className="ImgContainer">
			<img src={item.img_link}/>
		</div>

		<div className="Info">
			<Link className="ProName" onClick={ChangeDetail(item.p_name)}>
				{item.p_name}
			</Link>
				
			<div className="SecondContainer">
	 		<div className="Day">{item.p_ex_date}</div>
				<form>
				<button type="button" className="BtnDelete" onClick={openModal}>삭제하기</button>
				<Modal
					  isOpen={modalIsOpen}
					  onRequestClose={closeModal}
					 style={customStyles}
					contentLabel="Example Modal"
					className="Modal">
						<div className="TextDelete">해당 상품을 정말로 삭제하시겠습니까?</div>
						<button type="button" className="Yes" onClick={PDelete}>예</button>
						<button type="button" className="No" onClick={closeModal}>아니오</button>
				</Modal>
				</form>
			</div>
		</div>
	</div>
	 ))
    return(
        <>
            {List}
        </>
		
	)
	
    function PDelete() {
		const req = {
			id : id.toString(),
			p_name : "서울우유"
		}
		closeModal();
		console.log(req);
		axios.delete("/material/delete", {
			headers : {
					'Content-Type' : 'application/json'
			},
			body: {"id": id, "p_name" : "서울 우유"
		}
		})
		.then(function (response) {
			console.log(response.data.message);
			
		})
		
	}
}


export default ItemInfo;