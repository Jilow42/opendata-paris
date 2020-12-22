import React from 'react';
import Axios from 'axios';

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('Plop');
    Axios.get('https://opendata.paris.fr/api/datasets/1.0/search/?q=')
      .then((res) => {
        console.log(res);
        this.setState(res.data.datasets);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    if (data.length === 0) {
      return (
        <div>
          Non data
        </div>
      );
    }
    return (
      data.map((element) => (
        <div className="card">
          <h1>
            {element.datasetid}
          </h1>
          {/* <img src={element} className="card-img-top" alt={element} />
          <div className="card-body">
            <h5 className="card-title">
              {element}
            </h5>
            <p className="card-text">
              {element}
            </p>
            <a href={element} className="btn btn-primary">More infos</a>
          </div> */}
        </div>
      ))
    );
  }
}
