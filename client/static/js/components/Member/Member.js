// 成员介绍
import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';
import MemberContent from './MemberContent.js';
import '../../../css/Member.css';

class Member extends Component{

	render(){
		return(
			<div className="member">
				<Header />
				<MemberContent />
			</div>
		);
	}
}

export default Member;