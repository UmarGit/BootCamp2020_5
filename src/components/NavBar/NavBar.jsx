import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { Productcontext } from '../../store/productcontext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const productItem = useContext(Productcontext);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Link to="/">
        <Button aria-label="Home" color="inherit">
            <HomeIcon />&nbsp;<p>Home</p>
        </Button>
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to="/about">
        <Button aria-label="About" color="inherit">
            <InfoIcon />&nbsp;<p>About Us</p>
        </Button>
      </Link>
      </MenuItem>
      <MenuItem>
        <Button
          aria-label="cart"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClickOpen}
        >
          <Badge badgeContent={productItem.cart.length} color="secondary">
            <ShoppingCartIcon />&nbsp;<p>Cart</p>
          </Badge>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className="navbar">
        <Toolbar>
        <img src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" height="40" alt="shoe"/>
          <Typography className={classes.title} variant="h4" noWrap>
            &nbsp;<b>SHOEY</b>
          </Typography>
          <Cart open={open} handleClose={handleClose}/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link to="/">
            <Button aria-label="Home" color="inherit">
                <HomeIcon />&nbsp;<p>Home</p>
            </Button>
          </Link>
          <Link to="/about">
            <Button aria-label="About" color="inherit">
                <InfoIcon />&nbsp;<p>About Us</p>
            </Button>
          </Link>
            <Button
              edge="end"
              aria-label="cart"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClickOpen}
            >
              <Badge badgeContent={productItem.cart.length} color="secondary">
                <ShoppingCartIcon />&nbsp;<p>Cart</p>
              </Badge>
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
