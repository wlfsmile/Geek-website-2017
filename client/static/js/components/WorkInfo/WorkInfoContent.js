import React,{Component} from 'react';
import {render} from 'react-dom';

class WorkInfoContent extends Component{

	render(){
		return(
			<div className="workInfoContent clearfix">
				<div className="workInfoContent-img">

				</div>
				<div className="workInfoContent-intro">
					<p className="workInfoContent-title">微信，是一种生活方式</p>
					<p className="workInfoContent-introBody">
						通过五亿人使用的应用<br />
						支持发送语音短信、视频、图片和文字<br />
						可以群聊，仅耗少量流量，适合大部分智能手机<br />
					</p>
				</div>
			</div>
		);
	}
}

export default WorkInfoContent;
