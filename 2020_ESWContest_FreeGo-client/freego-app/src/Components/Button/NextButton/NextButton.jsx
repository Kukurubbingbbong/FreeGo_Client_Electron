import React from 'react';
import './NextButton.scss';
import { Link } from 'react-router-dom';

function NextButton({ page }) {
	return (
		<div>
			<button className="btn" type="button">
				로그인&nbsp;&nbsp;&gt;
			</button>
		</div>
	);
}
export default NextButton;
