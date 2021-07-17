const SearchBox = ({ searchchange }) => {
	return(
		<div className='pa2 tc'>
			<input
				className='pa3 ba b--green bg-lightest-blue tc' 
				type = 'search'
				placeholder = 'search kittens'
				onChange={searchchange}
			/>
		</div>
	);
}

export default SearchBox;