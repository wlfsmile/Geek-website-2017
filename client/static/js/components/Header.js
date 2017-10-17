// 网页头部，共用
import React,{Component} from 'react';
import {Link} from 'react-router';
import Logo from '../../images/logo.png';

class Header extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="header clearfix">
				<div className="logo" >
					<img src={Logo} className="logo-img" />
				</div>
				<ul className="nav clearfix">
					<li>
						<Link to="/" >首页 </Link>
					</li>
					<li>
						<Link to="/work" >成果展示</Link>
					</li>
					<li>
						<Link to="/member" >团队介绍</Link>
					</li>
					<li>
						<Link to="/join" >加入我们</Link>
					</li>
				</ul>
			</div>
			
		);
	}
}

export default Header;