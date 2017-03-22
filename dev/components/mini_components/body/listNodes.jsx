import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

const styles = {
    time_icon: {
      fontSize: 14,
  },
  wellStyle : {
    marginTop: 10,
  }
};


export default class ListNodes extends React.Component {
  render() {
    return (
      <div>
            { this.props.content.map(function(node, index) {
              return ( 
                <div className="well" style={styles.wellStyle} key={index}> 
                  
                  <Avatar
                    src="user.png"
                    size={40}
                  />
                  <h4>{node.title}</h4>
                  <p><FontIcon className="fa fa-clock-o" style={styles.time_icon}/> {node.created}</p>
                  <p>{node.body}</p>
                </div>);
              })
            }
      </div>
    );
  }
}