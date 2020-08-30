import React, {useContext} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Productcontext } from '../store/productcontext';
import products from '../store/data.json'

const useStyles = makeStyles((theme) => ({
  root: {
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  	height: 'calc( 100vh - 64px - 100px )',
  	backgroundColor: '#eae2b7ff',
  	padding: '100px 0 0 0'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function ProductItem() {
  const [open, setOpen] = React.useState(false);
  const [buy, setbuy] = React.useState('false');
  const [openProgress, setOpenProgress] = React.useState(false);
  const [quantity, setquantity] = React.useState(1);
  let navigate = useNavigate()
  const productItem = useContext(Productcontext);
  const classes = useStyles();
  let { id } = useParams();

  const handleToggle = () => {
    setOpenProgress(!openProgress);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let position = 0;

  products.map((product,index)=>{
  	return( id === product.id ? position = index : '')
  })

  let product = products[position]

  return (
    <div className={classes.root}>
		<div className="card">
		   <div className="left" >
		      <img className="box2 bounce-8" src={product.image} alt="Shoe"/>
		   </div>
		   <div className="right">
		      <div className="product-info">
		         <div className="product-name">
		            <h1>{product.name}</h1>
			         <div>
			            <p className="product-price">${product.price}</p>
			         </div>
					 <Fab variant="extended" onClick={handleClickOpen}>
					     <ShoppingCartIcon className={classes.extendedIcon} />
					     Add To Cart
					 </Fab>
		         </div>
		      </div>
		   </div>
		</div>
	        { buy === 'false' ? 
		  <Dialog
	        open={open}
	        onClose={handleClose}
	        aria-labelledby="alert-dialog-title"
	        aria-describedby="alert-dialog-description"
	      >
	        <DialogTitle id="alert-dialog-title">Adding "{product.name}" to Cart</DialogTitle>
	        <DialogContent>
	          <TextField id="outlined-basic" label="Quantity" onChange={(event)=>{
	          	setquantity(event.target.value)
	          }} variant="outlined" />
	          <br/><br/><br/>
	          <DialogContentText>
	          	Total ${quantity*product.price}
	          </DialogContentText>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={handleClose} color="primary">
	            Cancel
	          </Button>
	          <Button onClick={()=>{
                  productItem.addToCart(
					{
						id: product.id,
						name: product.name,
						image: product.image,
						price: product.price,
						quantity: Number(quantity)
					}
                  )
                  setbuy('true')
                  handleToggle()
                  setTimeout( ()=>{
                  	handleClose();
                  	navigate("/")
                  } , 4000);
                }} color="primary" autoFocus>
	            Add to Cart
	          </Button>
	        </DialogActions>
	      </Dialog>
	        :
		    <Backdrop className={classes.backdrop} open={openProgress}>
		    	<h3>Thank You For Buying, You Will be Redirected to Our Home Page Shortly....</h3>
	        	<CircularProgress color="inherit" />
	      	</Backdrop>	        
	         }
    </div>
  );
}

export default ProductItem;
