//加入我们的简介（要求）
import React,{Component} from 'react';
import {render} from 'react-dom';

class JoinContentIntro extends Component{

	constructor(props){
		super(props);
	}
	
	render(){
		const require = this.props.require;
		return(
			<div className="joinContent-intro">
				<p className="joinContent-title">加入我们，找到未来的自己</p>
				<p className="joinContent-job">{this.props.postion}</p>
				<p className="joinContent-require">
					<ul>
						<li>任职要求</li>
						{
							require.map((count,i) => {
								return (
									<li key={i} >{count}</li>
								);
							})
						}
					</ul>
				</p>
			</div>
		);
	}
}

export default JoinContentIntro;