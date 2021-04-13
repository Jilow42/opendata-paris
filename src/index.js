import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'babel-polyfill';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'notyf/notyf.min.css';

import Body from './components/body';
import Formulaire from './components/form';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      data: null,
    };
  }

  render() {
    const { message, data } = this.state;
    return (
      <Container fluid id="container">
        <Row>
          <Col sm={3} md={2} className="formulaire">
            <Formulaire datas={(dataMessage, datas) => {
              this.setState({
                message: dataMessage,
                data: datas,
              });
            }}
            />
          </Col>
          <Col sm={9} md={10}>
            <Body data={data} message={message} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Search} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
