import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './components/Card';

const App = () => (
  <div className="container">
    <Card />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
