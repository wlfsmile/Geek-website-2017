//现有成员、毕业成员的Tab键
import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class MemberContentTab extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="memberTab-Nav">
				<ul className="clearfix"> 
					<li onClick={this.props.setNow} >现在成员</li>
					<li onClick={this.props.setOld}>毕业成员</li>
				</ul>
			</div>
		);
	}
}

export default MemberContentTab;