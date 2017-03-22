import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Link from "react-router";

export default class MyDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); }
  handleClose() { this.setState({open: false}); }


  render() {
    return (
      <div>
        <IconButton
          iconClassName="fa fa-bars"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem href='/#/blog' onTouchTap={this.handleClose} leftIcon={<FontIcon className="fa fa-list-alt" />}>View content</MenuItem>
          <MenuItem href='/#/' onTouchTap={this.handleClose} leftIcon={<FontIcon className="fa fa-plus-square" />}>Add new content</MenuItem>
        </Drawer>
      </div>
    );
  }
}
