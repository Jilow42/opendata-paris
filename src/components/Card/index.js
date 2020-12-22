import { element } from 'prop-types';
import React from 'react';
import {card} from 'react-bootstrap';

const data = [

];

export default class Card extends React.Components{
  constructor () {
    super()
  }
};
  
class Card = () => {
  super()
  return(
    data.map((element) =>  (
      <div class="card">
        <img src="$`{element.img}`" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <a href="`${element.link}`" class="btn btn-primary">More infos</a>
        </div>
      </div>
    ))
  );
};
