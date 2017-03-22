import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddNode from './mini_components/body/addNode.jsx';
import ListNodes from './mini_components/body/listNodes.jsx';


{/* const url = 'http://vps272180.ovh.net/drupal/web/api/articles'; */}

const url = 'http://localhost:8100/content.json'

export default class AddContent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
            <AddNode />
        </div>
      </MuiThemeProvider>
      );
  }
}
