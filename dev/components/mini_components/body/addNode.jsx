import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

var styles = {
  paper1: {
    marginTop: 10,
    padding: 10,
  },
  saveButton: {
    color: '#FFFFFF',
  },
}

export default class AddNode extends React.Component {
  handleSaveNode() {
    var node = {
      _links: {
        type: {
          href: 'http://vps272180.ovh.net/drupal/web/rest/type/node/article'
        }
      },
      type: {
        target_id: 'article'
      },
      title: {
        value: document.querySelector("#node_title").value,
      },
      body: {
        value: document.querySelector("#node_body").value,
      }
    };


    fetch('http://vps272180.ovh.net/drupal/web/entity/node?_format=hal_json', {
  	method: 'POST',
  	headers: new Headers({
  		"Content-type":"application/hal+json",
      "Authorization":"Basic YWRtaW46Z29tZXpub20=",
      "X-CSRF-Token" : "3Au0SNgRjyIize2zegm_Ovy1boVD-0MKZwavsO0xJWs"
  	}),
    body: JSON.stringify(node)
    }).then(function(responseObj) { console.log(responseObj); });
  }


  render() {
    return (
      <div>
        <Paper zDepth={1} style={styles.paper1}>
          <TextField id="node_title" floatingLabelText="Title" />
          <TextField
          id="node_body"
          hintText="Body"
          floatingLabelText="Body"
          multiLine={true}
          rows={2}
          fullWidth={true}
          />
        </Paper>
        <Paper zDepth={1} style={styles.paper1}>
            <FlatButton
              onClick={this.handleSaveNode}
              label="Save"
              primary={true}
              icon={<FontIcon className="fa fa-save" />}
              style={styles.saveButton}
              backgroundColor="#1679B5"
            />
        </Paper>
    </div>
    );
  }
}
