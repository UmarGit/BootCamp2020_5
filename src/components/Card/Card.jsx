import React from 'react';
import './Card.css'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Card({image, name, price, id}) {

  const classes = useStyles();

  return (
	<div className="card">
	   <div className="left" >
	      <img className="box2 bounce-8" src={image} alt="shoe" />
	   </div>
	   <div className="right">
	      <div className="product-info">
	         <div className="product-name">
	            <h1>{name}</h1>
		         <div>
		            <p className="product-price">${price}</p>
		         </div>
		         <Link to={`/productItem/${id}`}>
					 <Fab variant="extended">
					     <ShoppingCartIcon className={classes.extendedIcon} />
					     Shop Now
					 </Fab>
				 </Link>
	         </div>
	      </div>
	   </div>
	</div>
  );
}

export default Card;
