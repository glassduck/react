import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		username: '',
		message: '',
	};

	// constructor(props) {
	// super(props);
	// this.handleChange = this.handleChange.bind(this);
	// this.handleClick = this.handleClick.bind(this); //props에서 설정할때는 bind this해줘야한다. 안해주면 undefinded뜸.
	// }

	handleChange = (e) => {
		//화살표 함수 쓰면 저 위의 생성자에서 bind this하는 걸 안 쓸 수 있다고 함.
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ':' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="사용자명"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					j
					name="message"
					placeholder="아무거나 입력해 보십시오"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default EventPractice;
