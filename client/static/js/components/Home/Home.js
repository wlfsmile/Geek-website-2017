import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';
import HomeContent from './HomeContent.js';
import '../../../css/Home.css';

class Home extends Component{

	render(){
		return(
			<div className="index">
				<Header />
				<HomeContent />
			</div>
		);
	}
}

export default Home;