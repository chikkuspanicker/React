import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
const PhoneList = () => (
  <MuiThemeProvider>
    <List>
      <ListItem className="list-item" leftAvatar={<Avatar src="src/img/phones/samsung.jpg" size={50}/> } >     
        Samsung
        <FlatButton label="Delete" className="pull-right" rippleColor="#ff9999" backgroundColor="#990000" hoverColor="#f00"/>
      </ListItem>
      <ListItem className="list-item" leftAvatar={<Avatar src="src/img/phones/samsung.jpg" size={50}/> } >     
        Samsung
        <FlatButton label="Delete" className="pull-right" rippleColor="#ff9999" backgroundColor="#990000" hoverColor="#f00"/>
      </ListItem>
      <ListItem className="list-item" leftAvatar={<Avatar src="src/img/phones/samsung.jpg" size={50}/> } >     
        Samsung
        <FlatButton label="Delete" className="pull-right" rippleColor="#ff9999" backgroundColor="#990000" hoverColor="#f00"/>
      </ListItem>
      <ListItem className="list-item" leftAvatar={<Avatar src="src/img/phones/samsung.jpg" size={50}/> } >     
        Samsung
        <FlatButton label="Delete" className="pull-right" rippleColor="#ff9999" backgroundColor="#990000" hoverColor="#f00"/>
      </ListItem>
    </List>
    </MuiThemeProvider>
);

export default PhoneList;