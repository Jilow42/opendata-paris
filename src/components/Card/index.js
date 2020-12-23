import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default class EvevntCard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    console.log(data);
    if (data.length === 0) {
      return (
        <div>
          non data
        </div>
      );
    }
    return (
      data.datasets.map((element) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={element} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.descrition}</Card.Text>
            <Button variant="primary">More Infos</Button>
          </Card.Body>
        </Card>
      ))
    );
  }
}
