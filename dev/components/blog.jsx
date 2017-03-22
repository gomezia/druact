import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header.jsx';
import ListNodes from './mini_components/body/listNodes.jsx';
import LeftMenu from './mini_components/menu/leftmenu.jsx';

const url = 'http://vps272180.ovh.net/drupal/web/api/articles';
{/*const url = '/content.json';*/}

export default class Blog extends React.Component {
  constructor(){
      super();
      this.state = {
          jsonNodes: []
      };
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({jsonNodes: json});
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Grid>
            <Row>
              <Col xs={3} >
                <LeftMenu />
              </Col>
              <Col xs={9} >
                <ListNodes content={this.state.jsonNodes} />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
      );
  }
}


