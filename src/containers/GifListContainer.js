import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GiftListContainer extends React.Component {
	constructor(){
		super();

		this.state = {
			gifs: [],
		}

		this.fetchData = this.fetchData.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	 fetchData(searchTerm) {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
		.then(res => res.json())
		.then(json => this.setState({ gifs: json.data.slice(0,3)}))

	}

	componentDidMount() {
		this.fetchData();
	}

	submitHandler(searchTerm) {
		this.fetchData(searchTerm)
	}

	render(){
		console.log(this.state)
		
		return(
			<div>
				<GifList gifs={this.state.gifs}/>
				<GifSearch handleSubmit={this.submitHandler}/>

			</div>
			)
	}
}

export default GiftListContainer