import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import {Link} from '@reach/router';


const style = {
  display: 'inline-block',
  margin: '0 50px 0 0',
  width: '100%',
  fontDecoration: "none",
  fontFamily: "Arial"
  
};



const NavBar = (props)=> {
    return (
        <div >
        <AppBar position="static" color="primary" style={{ position: 'fixed'}}>
          <Tabs
            fullWidth={true}
            indicatorColor="secondary"
            centered
          >
            <Tab style={style} label="Dashboard"  component={Link} to="/" />
            <Tab style={style} label="Issues"  component={Link} to="/issues" />
            <Tab style={style} label="Alerts"  component={Link} to="/alerts" />
            <Tab style={style} label="Admin"  component={Link} to="/admin" />
            

          </Tabs>
        </AppBar>
      </div>
    );
}

export default NavBar;
    





