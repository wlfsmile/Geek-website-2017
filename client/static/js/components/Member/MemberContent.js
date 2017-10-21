// 成员介绍的tab内容
import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import MemberContentTab from './MemberContentTab.js';
import MemberContentInfo from './MemberContentInfo.js';

class MemberContent extends Component{

	constructor(props){
		super(props);

		this.setPage = this.setPage.bind(this);
		this.setPrev = this.setPrev.bind(this); //上一页
		this.setNext = this.setNext.bind(this); //下一页
		this.setAjax = this.setAjax.bind(this); //ajax请求函数
		this.setNow  = this.setNow.bind(this);  // 点击现在成员
		this.setOld  = this.setOld.bind(this);  //点击已毕业成员

		this.state = {
			indexList : [],  //当前页面显示的成员数据信息
			totalData : [],  //一共有多少条数据
			pageSize : 4,    //一页显示多少条数据
			num:0,           //要去的条数index
			totalPage:0,     //总页数
			current : 1 ,    //当前页
		};
	}

	
	//请求初始数据/现有
	componentDidMount(){
		let url = "/member/getAllNowMembers";
		this.setAjax(url);
	}

	//ajax请求数据
	setAjax(url){
		$.ajax({
			url : url,
			type : "GET",
			dataType: 'json',
			success : (data) => {
				console.log(data);
				if (data.status == 1) {
					let items = data.memberData;
					this.setState({
						totalData : items,
						totalPage : Math.ceil(items.length/this.state.pageSize),
					});
					this.setPage(this.state.num); 
				}else{
					alert("error");
				}
			},
			error : () => {
				alert("请求失败");
			}
		})
	}

	//现有成员
	setNow(){			
		let url = "/member/getAllNowMembers"
		this.setAjax(url);
		this.setState({
			current : 1,
			num : 0
		})
	}

	//已毕业成员
	setOld(){
		let url = "/member/getAllOldMembers"
		this.setAjax(url);
		this.setState({
			current : 1,
			num : 0
		})
	}


	// 设置内容
	setPage(num){
		this.setState({
			indexList : this.state.totalData.slice(num,num+this.state.pageSize)
		})
	}

	//上一页
	setPrev(){
		if(this.state.current > 1){
			this.setState({
				current : this.state.current - 1,
				num : this.state.num - this.state.pageSize
			},() => {
				this.setPage(this.state.num);
			})
		}
	}

	//下一页
	setNext(){
		if(this.state.current < this.state.totalPage){
			this.setState({
				current : this.state.current + 1,
				num : this.state.num + this.state.pageSize
			},() => {
				this.setPage(this.state.num);
			})
		}
	}

	render(){
		const indexList = this.state.indexList;
		return(
			<div className="memberTab">
				<MemberContentTab 
					setNow = {this.setNow}
					setOld = {this.setOld}
				/>
				<MemberContentInfo 
					{...this.state}
					setPrev = {this.setPrev}
					setNext = {this.setNext}
				 />
			</div>
		);
	}
}
export default MemberContent;