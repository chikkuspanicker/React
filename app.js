import injectTapEventPlugin from 'react-tap-event-plugin';
import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './src/js/wrapper.js'
injectTapEventPlugin();

class App extends Component {
   render() {
      return (
        <div className="container">            
            <Wrapper/>
        </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('app'));