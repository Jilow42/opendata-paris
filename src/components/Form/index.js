import React from 'react';
import Axios from 'axios';

import {
  Form,
  Button,
} from 'react-bootstrap';

export default class NavForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: '',
    };
    this.sendSearch = this.sendSearch.bind(this);
  }

  sendSearch() {
    const { inputValue } = this.state;
    Axios.get(`https://opendata.paris.fr/api/datasets/1.0/search/?q=${inputValue}`)
      .then((res) => {
        console.log(res.data.datasets);
        this.setState({ data: res.data.datasets });
        console.log('Happy Plop');
      })
      .catch((err) => {
        console.error(err);
        console.log('Sad Plop');
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Label>Recherche</Form.Label>
            <Form.Control type="text" placeholder="Enter smtg" onChange={(e) => this.setState({ data, inputValue: e.target.value })} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.sendSearch}>
            Submit
          </Button>
        </Form>
        <div>
          {
            data.map((elm) => <div>{elm.datasetid}</div>)
          }
        </div>
      </div>
    );
  }
}
