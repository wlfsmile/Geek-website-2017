import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Header from '../Header.js';
import WorkInfoContent from './WorkInfoContent.js';
import '../../../css/WorkInfo.css';

class WorkInfo extends Component{

	constructor(props){
		super(props);
		this.state = {
			workName:'',
			workLink:'',
			workImg:'',
			workIntro:''
		};
	}

	componentDidMount(){
		$.ajax({
			url: '/work/getWorks/'+this.props.params.id,
			type: 'GET',
			dataType: 'json',
			success: (data)=>{
				if(data.status == 1){
					let workData = data.workData;
					this.setState({
						workName: workData.workName,
						workLink: workData.workLink,
						workImg: workData.workImg,
						workIntro: workData.workIntro
					});
				}else{
					alert('error');
				}
			},
			error: ()=>{
				alert('请求失败');
			}
		})
	}

	render(){
		return(
			<div className="workInfo">
				<Header />
				<WorkInfoContent {...this.state} />
			</div>
		);
	}
}

export default WorkInfo;