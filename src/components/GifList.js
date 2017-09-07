import React from 'react'


const GifList = (props) => {

	return(
		<div>
		{props.gifs.map((img) => <li key={img.id}>{<img src={img.images.original.url}/>}</li>)}
		</div>
		)
}

export default GifList