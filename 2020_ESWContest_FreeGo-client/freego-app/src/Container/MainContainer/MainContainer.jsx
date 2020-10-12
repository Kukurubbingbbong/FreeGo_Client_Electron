import React, {useState} from 'react';
import './MainContainer.scss';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import axios from 'axios';
import ItemInfo from '../ItemInfoContainer/ItemInfo.jsx';

   
function MainContainer( {history} ) {
	const id = localStorage.getItem('id');

	const [Content, setContent] = useState('');

	const onChangeText = e => {
		setContent(e.target.value);
	}
 
	return (
		<div>
			<input type="text" className="SearchBar" onChange={onChangeText} value={Content}/>
			<button type="button" className="Search" onClick={Search}/>

			<button tyle="button" className="Dsearch" >유통기한 지난 재료 조회</button>

			<div className="ProductContainer" >
				<ItemInfo/>			
			</div>

			<button type="button" className="PlusButton" onClick={()=>{history.push('/AddContainer')}}/>

		</div>
	);


	
	function Search() {
		console.log(id + ", " + Content);
		axios.get(`/material/find/${id}?p_name=${Content}`)
		.then(function (response){
			console.log(response.data.message);
		})
	}
}

export default MainContainer; 
