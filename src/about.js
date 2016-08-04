import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from './component/Nav';

class App extends Component {
    render() {
        return <div>
            <Nav />
            Hello About YOYOYOYY
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));