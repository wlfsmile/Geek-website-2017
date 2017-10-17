import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';
import WorkInfoContent from './WorkInfoContent.js';
import '../../../css/WorkInfo.css';

class WorkInfo extends Component{

	render(){
		return(
			<div className="workInfo">
				<Header />
				<WorkInfoContent />
			</div>
		);
	}
}

export default WorkInfo;