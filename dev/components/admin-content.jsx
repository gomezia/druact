import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './header.jsx';
import AdminListNodes from './mini_components/body/admin-list-nodes.jsx';
import LeftMenu from './mini_components/menu/leftmenu.jsx';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const url = 'http://vps272180.ovh.net/drupal/web/api/articles';
{/*const url = '/content.json';*/}

export default class AdminContentPage extends React.Component {
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

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                    {/*<AdminListNodes content={this.state.jsonNodes} />*/}
                    { this.state.jsonNodes.map(function(node, index) {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td><h5>{node.title}</h5></td>
                          <td>{node.created}</td>
                          <td>
                            <IconButton iconClassName="fa fa-edit" tooltip="Edit"/>
                          </td>
                        </tr>
                       );
                      })
                    }
                </tbody>
              </table>

              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
      );
  }
}