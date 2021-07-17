const Scroll = ({ children }) => {
	return(
		
		<div style={{ overflow: 'scroll', border: '2px solid black', height: '555px'}}>
		   {children}
		</div>
		
	);
}

export default Scroll;