// 加入我们的职位Tab键
import React,{Component} from 'react';
import {render} from 'react-dom';

class JoinContentTab extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="joinContent-tab">
				<ul>
					<li onClick={this.props.handleTech} >技术研发</li>
					<li onClick={this.props.handleProduct} >产品设计</li>
					<li onClick={this.props.handleOperate} >运营</li>
				</ul>
			</div>
		);
	}
}

export default JoinContentTab;