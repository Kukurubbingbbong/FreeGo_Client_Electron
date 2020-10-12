import React from 'react';
import './StartLoddingContainer.scss';
import StartLogo from '../../Components/Logo/Logo';


function StartLoddingContainer( {history} ) {

	setTimeout(()=>{
		history.push('/LoginRegisterContainer');
	}, 2000);

	return(
		<div className="mainframe">
			<StartLogo page="start"/>
			{setTimeout}
		</div>
	);
}

export default StartLoddingContainer;