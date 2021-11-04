import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = '';
  }

  // let handleOrderOnline =  () => {
  //   this.props.history.push('/order');
  // }

  let Button = styled.button`
  color: palevioletred;
  `

  return (
    <div className="nav">

      <AppBar position="static">
        <Toolbar color="inherit">
          <Grid
            justify="space-between"
            container
            spacing={24}
            alignItems="center"
            >

            <Grid item>
              <Typography>
                <Link to="/home">
                  <h2 className="nav-title">UPFRONT BASIC</h2>
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className="">
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
          {/* <Grid 
      item 
      color="inherit" >
            <div className="nav-right">
              <Link className="nav-link" to={loginLinkData.path}> */}
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {/* {loginLinkData.text}
              </Link> */}
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {/* {props.store.user.id && (
                <>
                  <Link className="nav-link" to="/info">
                    Info Page
            </Link>
                  <LogOutButton className="nav-link" />
                </>
              )} */}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
          {/* </div>
      </Grid> */}
          {/* <Grid>
        <Typography>
          <Button color="inherit">
            Order Online
          </Button>
        </Typography>
      </Grid> */}
        </Toolbar>
      </AppBar>

      {/* <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Smokin' Ninjas</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}> */}
      {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
        //   and call this link 'Login / Register' if they are not */}
      {/* //   {loginLinkData.text}
        // </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {/* // {props.store.user.id && ( */}
      {/* //   <>
        //     <Link className="nav-link" to="/info">
        //       Info Page
        //     </Link>
        //     <LogOutButton className="nav-link" />
        //   </>
        // )} */}
      {/* Always show this link since the about page is not protected */}
      {/* //     <Link className="nav-link" to="/about">
    //       About
    //     </Link>
    //   </div> */}
      {/* // </div> */}
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
