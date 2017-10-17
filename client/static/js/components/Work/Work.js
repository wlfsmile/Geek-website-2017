import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';
import WorkContent from './WorkContent.js';
import '../../../css/Work.css'

class Work extends Component{
	render(){
		return(
			<div className="work">
				<Header />
				<WorkContent />
			</div>
		);
	}
}

export default Work;