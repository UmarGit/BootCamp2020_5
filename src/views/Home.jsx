import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '../components/Card/Card';
import products from '../store/data.json'

function Home() {
  return (
    <div>
      <div className="section1">
	      <Typography variant="h1" component="h2" gutterBottom>
	        	<div>Welcome To <i>Sh<img className="box3 bounce-7" src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" height="60" alt="shoe"/>ey</i></div>
	      </Typography>
	  </div>
	  <div className="section2">
	      <Typography variant="h1" component="h2" gutterBottom>
	        	<b>SHOE Gallery</b>
	      </Typography>
	      <div className="gallery">
	    	{
	          products.map((product)=>{
		      	return(
		      		<Card image={product.image} id={product.id} name={product.name} price={product.price} key={product.id} />
		      	)
		      })
	    	}
	      </div>
	  </div>
    </div>
  );
}

export default Home;
