import React,{Component} from 'react';
import {render} from 'react-dom';
import Geek from '../../../images/geek1.png';

class HomeContent extends Component{
	render(){
		return(
			<div className="homeContent">
				<div className="homeContent-geek">
					<img src={Geek} />
				</div>
				<div className="homeContent-tech">
					前端|后台|运营|设计
				</div>
			</div>
		);
	}
}

export default HomeContent;