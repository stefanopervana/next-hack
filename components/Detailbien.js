import React from 'react';
import Chance from 'chance'



class Detail extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
		name : chance.first(),
		country: chance.country({ full: true })
	};
}


	buttonClicked() {
		console.log('Button was clicked!')
	}
	render() {
		return <div><p>Hello, { chance.first() }!</p>
		<p>You´re from { chance.country({ full: true })}.</p>
		<button onClick={ this.buttonClicked.bind(this) }>Meet Someone</button>
		</div>;
						}
					}

export default Detail;


