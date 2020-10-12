import React, {useState} from 'react';
import { Logo4 } from '../../Components';
import './WelcomeContainer.scss';
import axios from 'axios';

function WelcomeContainer( {history} ) {

    const id = useState(localStorage.getItem('id') || '');

    setTimeout(()=>{
		history.push('/TutorialContainer');
	}, 2000);

    return(
        <>
            <Logo4/>

            <div className="WelcomeContainer">
                <div className="Name"><span className="User">{id}</span>님</div>
                환영합니다!
            </div>

            
           
        </>
    );
}

export default WelcomeContainer;