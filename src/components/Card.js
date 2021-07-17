const Card = ({ id, name, email }) => {
	return(
		<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
			<img alt='lol' src={`https://robohash.org/${id}?set=set4&size=150x150`}/>
			<h2>{ name }</h2>
			<h4>{ email }</h4>
		</div>
	);
}

export default Card;