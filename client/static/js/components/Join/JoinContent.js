import React,{Component} from 'react';
import {render} from 'react-dom';

class JoinContent extends Component{

	render(){
		return(
			<div className="joinContent clearfix">
				<div className="joinContent-tab">
					<ul>
						<li>技术研发</li>
						<li>产品设计</li>
						<li>运营</li>
					</ul>
				</div>
				<div className="joinContent-intro">
					<p className="joinContent-title">加入我们，找到未来的自己</p>
					<p className="joinContent-job">超级全栈设计师</p>
					<p className="joinContent-require">
						<ul>
							<li>任职要求</li>
							<li> 无论是前端的js，react，css还是后端java，go，c++还是安卓或者ios，都归你管</li>
							<li> 深厚的计算机基础知识和算法背景</li>
							<li> 敢于挑战自己，不畏惧学习新鲜事物</li>
							<li> 强烈的自我驱动</li>
							<li> 接受实习</li>
						</ul>
					</p>
				</div>
			</div>
		);
	}
}

export default JoinContent;