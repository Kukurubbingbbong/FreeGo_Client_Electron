import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DataProvider } from './Redux/Context/Context.js';
import {
	MainContainer,
	StartLoddingContainer,
	TutorialContainer,
	RegisterContainer,
	LoginContainer,
	LoginRegisterContainer,
	WelcomeContainer,
	AddContainer,
	SelfRegisterContainer,
	ConfirmContainer,
	DetailContainer,
	ItemInfoContainer,
} from './Container';

const App = () => {
	return (
		<BrowserRouter>
			<DataProvider>
				<Route exact path="/" component={StartLoddingContainer} />
				<Route path="/LoginContainer" component={LoginContainer}/>
				<Route path="/LoginRegisterContainer" component={LoginRegisterContainer}/>
				<Route path="/RegisterContainer" component={RegisterContainer} />
				<Route path="/TutorialContainer" component={TutorialContainer} />
				<Route path="/WelcomeContainer" component={WelcomeContainer}/>
				<Route path="/MainContainer" component={MainContainer}/>
				<Route path="/AddContainer" component={AddContainer}/>
				<Route path="/SelfRegisterContainer" component={SelfRegisterContainer}/>
				<Route path="/ConfirmContainer" component={ConfirmContainer}/>
				<Route path="/DetailContainer" component={DetailContainer}/>
				<Route path="ItemInfoContainer" component={ItemInfoContainer}/>
			</DataProvider>
		</BrowserRouter>
	);
};

export default App;
