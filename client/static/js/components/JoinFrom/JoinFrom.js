import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';
import JoinFromContent from './JoinFromContent.js';
import '../../../css/JoinFrom.css';

class JoinFrom extends Component{

	render(){
		return(
			<div>
				<Header />
				<JoinFromContent />
			</div>
		);
	}
}

export default JoinFrom;