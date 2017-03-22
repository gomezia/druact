import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import AddContent from './components/addContent.jsx';
import Blog from './components/blog.jsx';
import LeftMenu from './components/mini_components/menu/leftmenu.jsx';
import AdminContentPage from './components/admin-content.jsx';


injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Grid>
        <Row>
          <Col xs={3} >
            <LeftMenu />
          </Col>
          <Col xs={9} >
            <AddContent />
          </Col>
        </Row>
      </Grid>
    </div>
  </MuiThemeProvider>
);


ReactDOM.render(
<div>
	 <Router>
	  	<Route exact path="/" component={App} />
	 </Router>
	 <Router>
	  	<Route exact path="/blog" component={Blog} />
	 </Router>
     <Router>
      <Route exact path="/admin-content" component={AdminContentPage} />
   </Router>
 </div>,
  document.getElementById('container')
);
