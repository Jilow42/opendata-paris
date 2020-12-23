import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventCard from './components/Card';
import NavForm from './components/Form';

const App = () => (
  <div className="container">
    <NavForm />
    <EventCard />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
