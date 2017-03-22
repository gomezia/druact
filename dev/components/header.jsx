/*
    ./client/components/App.jsx
*/
import React from 'react';
import AppBar from 'material-ui/AppBar';
import MyDrawer from './mini_components/header/my_drawler.jsx';
import AppbarUser from './mini_components/header/appbar_user.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const appBarStyle = {
  backgroundColor: '#1679B5'
}


export default class Header extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
          <AppBar 
	          title="Druact"  
	          iconElementLeft={<MyDrawer />} 
	          style={appBarStyle}
	          iconElementRight={<AppbarUser />}
          />
        </MuiThemeProvider>
      );
  }
}
