import React, { Component } from 'react';
import './Logo2.scss';
import logo from './snow.png';

function Logo2() {
	return (
		<div className="frame2">
			<img src={logo} className="img2" alt="snow" />
			<b className="Logo2">freego</b>
		</div>
	);
}


export default Logo2;
