import React,{Component} from 'react';
import {render} from 'react-dom';

class WorkInfoContent extends Component{

	constructor(props){
		super(props);
	}

	
	render(){
		const {workName,workLink,workImg,workIntro} = this.props;
		return(
			<div className="workInfoContent clearfix">
				 {/* <a href={workLink}>  */}
					<img href={workLink} className="workInfoContent-img" src={workImg} />
				 {/* </a>  */}
				<div className="workInfoContent-intro">
					<p className="workInfoContent-title">{workName}</p>
					<p className="workInfoContent-introBody">
						{workIntro}
						{/* 通过五亿人使用的应用<br />
						支持发送语音短信、视频、图片和文字<br />
						可以群聊，仅耗少量流量，适合大部分智能手机<br /> */}
					</p>
				</div>
			</div>
		);
	}
}

export default WorkInfoContent;
