import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import Header from '../Header.js';
import JoinContentTab from './JoinContentTab.js';
import JoinContentIntro from './JoinContentIntro.js';
import '../../../css/Join.css';

class Join extends Component{

	constructor(props){
		super(props);

		this.joinAjax = this.joinAjax.bind(this); //请求职位内容
		this.handleTech = this.handleTech.bind(this);  //点击技术研发
		this.handleProduct = this.handleProduct.bind(this);  //点击产品设计
		this.handleOperate = this.handleOperate.bind(this);  //点击运营

		this.state = {
			postion : [],
			require : [],
		};
	}

	componentDidMount(){
		let url = "tech";
		this.joinAjax(url);
	}

	//职位内容的ajax
	joinAjax(url){
		$.ajax({
			url: "http://rapapi.org/mockjsdata/20244/"+url,
			type: "GET",
			success : (data) => {
				if(data.message == 'success'){
					this.setState({
						postion : data.postion,
						require : data.require,
					});
				}else{
					alert("error");
				}
			},
			error : () => {
				alert("请求失败");
			}
		})
	}

	// 技术
	handleTech(){
		let url = "tech";
		this.joinAjax(url);
	}
	// 产品
	handleProduct(){
		let url = "product";
		this.joinAjax(url);
	}
	//运营
	handleOperate(){
		let url = "operate";
		this.joinAjax(url);
	}

	render(){
		return(
			<div className="join">
				<Header />
				<div className="joinContent">
					<JoinContentTab
						joinAjax = {this.joinAjax}
						handleTech = {this.handleTech}
						handleProduct = {this.handleProduct}
						handleOperate = {this.handleOperate}
					/>
					<JoinContentIntro 
						{...this.state}
					/>
				</div>
				<div>
					<Link to="/join/from" className="joinButton">立即报名</Link>
				</div>
			</div>
		);
	}
}

export default Join;