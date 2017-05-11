import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './header.js';
import PhoneList from './phone-list.js';
class Wrapper extends Component {
   render() {
      return (
        <div>
           <Header/>
           <PhoneList/>
        </div>
      );
   }
}
export default Wrapper;