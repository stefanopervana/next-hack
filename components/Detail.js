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
	buttonClicked1() {
		const newState = {
			country: chance.country({ full: true })
		};
		this.setState(newState);
	}

	buttonClicked() {
		const newState = {
			name: chance.first()
		};
		this.setState(newState);
	}
	render() {
		return <div>
		<p>Hello, { this.state.name }.</p>
		<p>You´re from { this.state.country }.</p>
		<button  onClick={ this.buttonClicked.bind(this) }>Meet Someone Name</button>
		<button onClick={ this.buttonClicked1.bind(this) }>Meet Someone Country</button>
		    <style jsx>{`
      p {
        color: blue;
        font-size: 30px;

      }
      div {
        background: yellow;
      }
      @media (max-width: 600px) {
        button {
          color: blue;
          font-size: 30px;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
		</div>;
						}
					}

export default Detail;


