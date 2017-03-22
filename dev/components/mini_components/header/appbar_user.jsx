import React from 'react';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

export default class AppbarUser extends React.Component {
  render() {
    return (
      <div>
        Hello 
        <Avatar
          src="user.png"
          size={40}
          style={style}
        />
      </div>
    );
  }
}