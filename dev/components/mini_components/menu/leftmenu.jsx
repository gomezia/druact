import React from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Link from "react-router";

var styles = {
  paperStyle: {
    marginTop: 10,
  }
}

export default class LeftMenu extends React.Component {

  render() {
    return (
      <div>
        <Paper style={styles.paperStyle}>
          <MenuItem href='./#/blog' onTouchTap={this.handleClose} leftIcon={<FontIcon className="fa fa-list-alt" />}>View content</MenuItem>
          <MenuItem href='./#/admin-content' onTouchTap={this.handleClose} leftIcon={<FontIcon className="fa fa-plus-square" />}>Administer content</MenuItem>
          <MenuItem href='./#/' onTouchTap={this.handleClose} leftIcon={<FontIcon className="fa fa-plus-square" />}>Add new content</MenuItem>
        </Paper>
      </div>
    );
  }
}