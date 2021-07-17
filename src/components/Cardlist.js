import Card from './Card';

const Cardlist = ({ kittens }) => {
	return(
		<>
			{
				kittens.map( (_,i) => {
					return(
						<Card
							key={kittens[i].id} 
							id={kittens[i].id}
							name={kittens[i].name}
							email={kittens[i].email}
						/>
					)
				})
			}
		</>
	)
}

export default Cardlist;