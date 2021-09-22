
const Card = ({name, email,id}) =>{
	return(
		<div className='bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5'>
		  <img src={`https://robohash.org/${id}?set=set2&size=300x300`} alt='robots'/>
		  <div>
			    <h2>{name}</h2>
			    <p>{email}</p>
		  </div>
		</div>
	 );
}

export default Card;