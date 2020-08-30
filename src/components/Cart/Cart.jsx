import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Productcontext } from '../../store/productcontext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  left: {
    float: 'left',
  },
  right: {
    float: 'right',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open, handleClose}) {
  let productItem = useContext(Productcontext);

  let totalquantity = 0
  let totalprice = 0
  let total = 0

  for (var i=0 ; i < productItem.cart.length; i++) {
    totalprice += productItem.cart[i].price
    totalquantity += productItem.cart[i].quantity
    total += (productItem.cart[i].price * productItem.cart[i].quantity)
  }
  
  const classes = useStyles();

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className='cart'>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cart
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose} alt="shoe">
              CheckOut
            </Button>
          </Toolbar>
        </AppBar>
          {
            productItem.cart.map((cartItem)=>{
              return(
                <List key={cartItem.id}>
                  <ListItem>
                    <ListItemText>
                      <div className={classes.left}>
                        <span><b>{cartItem.name} (${cartItem.price})</b>  {cartItem.quantity} pieces</span>
                        <br/>
                        <Button color="primary" onClick={()=>{
                          productItem.deleteFromCart(cartItem.id)
                        }}>
                          Remove From Cart
                        </Button>
                      </div>
                      <div className={classes.right}>
                        <img src={cartItem.image} height="50" alt="shoe"/>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <Divider />
                </List>
              )
            })
          }
          <ListItem>
            <small>{"Total Price: $" + totalprice}</small>
            <Divider />
          </ListItem>
          <ListItem>
            <small>{"Total Pieces: $" + totalquantity}</small>
            <Divider />
          </ListItem>
          <ListItem>
            <ListItemText primary={"Total Checkout: $" + total}/>
            <Divider />
          </ListItem>
        </Dialog>
    </div>
  );
}

