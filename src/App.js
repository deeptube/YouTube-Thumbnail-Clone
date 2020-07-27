import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import MainContainer from './MainContainer'

function App() {
	return (
		<div className="app">
			<Header />
			<div className = "app__page">
				<SideBar />
				<MainContainer />
			</div>
		</div>
	);
}

export default App;
