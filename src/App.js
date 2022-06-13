import React from "react";
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from "./components/Home/Footer";
import Collection from './components/collections/Collection';
import About from "./components/collections/About";
import SignUp from "./components/HolderInUp/InUp";
import Confirm from "./components/Confirm";
import Upload from "./components/Home/upload";
import Slider from './components/collections/Slider';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/slide' element={ <Slider /> } />
					<Route path='/collecttion' element={ <Collection /> } />
					<Route path='/confirm' element={ <Confirm /> } />
					<Route path='/upload' element={ <Upload /> } />
					<Route path='/about' element={ <About /> } />
					<Route path='/signUp' element={ <SignUp /> } />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;


// import React from 'react';
// import DisplayPidgin from './PidginComp/DisplayPidgin';

// const App = () => {
// 	return (
// 		<div>
// 			<DisplayPidgin />
// 		</div>
// 	);
// };

// export default App;