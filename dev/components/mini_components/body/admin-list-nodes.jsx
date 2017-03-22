import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
    time_icon: {
      fontSize: 14,
  },
  wellStyle : {
    marginTop: 10,
  }
};


export default class AdminListNodes extends React.Component {
  render() {
    return (
      <div>
            { this.props.content.map(function(node, index) {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{node.title}</TableRowColumn>
                  <TableRowColumn>{node.created}</TableRowColumn>
                </TableRow>
               );
              })
            }
      </div>
    );
  }
}

