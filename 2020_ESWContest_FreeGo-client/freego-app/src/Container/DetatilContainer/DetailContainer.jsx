import React, { useState } from 'react';
import { UseFreegoState } from '../../Redux/Context/Context';
import './DetailContainer.scss';

function DetailContainer( {history} ) {
	const state = UseFreegoState();

	return (
		<div className="CContainer" style={{overflow: "none"}}>
			<div className="ImagePlace">
				<button className="BackBtn" onClick={() => {history.push('/MainContainer')}}/>
				<div className="ProName">{state.selName}</div>
			</div>
			<div className="recipeContainer">
				<div className="recipe">
					<div className="Image">

					</div>
					<div className="Link">
						핫쵸코 만들기
					</div>
				</div>

				<div className="recipe">
					<div className="Image">

					</div>
					<div className="Link">
						핫쵸코 만들기
					</div>
				</div>

				<div className="recipe">
					<div className="Image">

					</div>
					<div className="Link">
						핫쵸코 만들기
					</div>
				</div>

				<div className="recipe">
					<div className="Image">

					</div>
					<div className="Link">
						핫쵸코 만들기
					</div>
				</div>
			</div>

			
		</div>
	);
}
export default DetailContainer;
