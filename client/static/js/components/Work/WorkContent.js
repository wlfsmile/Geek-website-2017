import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';

class WorkContent extends Component{

	constructor(props){
		super(props);

		this.state = {
			workList : [],
		};
	}

	componentDidMount(){
		let url = "/work/getWorks";
		$.ajax({
			url: url,
			type : "GET",
			success : (data) =>{
				if(data.status == 1){
					this.setState({
						workList : data.workData
					});
				}else{
					alert("失败");
				}
			},
			error : ()=>{
				alert("error");
			} 
		})
	}

	render(){
		const workList = this.state.workList;
		return(
			<div className="workContent">
				<ul className="clearfix">
				{
					workList.map((count,i) => {
						return (
							<Link to={"/work/"+count._id} key={i} >
								<img src={count.workImg} className="workContent-img" />
							</Link>
						);
					})
				}
				</ul>
			</div>
		);
	}
}

export default WorkContent;