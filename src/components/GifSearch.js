import React from 'react'

class GifSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ""
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}


	handleInput(event) {
		this.setState({
			searchTerm: event.target.value
		})
		console.log(event.target.value)
	}

	handleClick() {
		console.log(this.props)
		this.props.handleSubmit(this.state.searchTerm)
	}

	render() {

		return(
			<div>
					<input type="text" value={this.state.searchTerm} onChange={this.handleInput}/>
					<button onClick={this.handleClick}> Search </button>
			</div>
			)
		}
}

export default GifSearch