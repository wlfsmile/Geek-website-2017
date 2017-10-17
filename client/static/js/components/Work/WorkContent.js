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
		let url = "http://rapapi.org/mockjsdata/20244/work";
		$.ajax({
			url: url,
			type : "GET",
			success : (data) =>{
				if(data.message == "success"){
					this.setState({
						workList : data.data
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
							<Link to={"/work/"+count.id} key={i} >
								<img src={count.img} className="workContent-img" />
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