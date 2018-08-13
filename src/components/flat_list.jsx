import React, { Component } from 'react';

import Card from './card.jsx'


class FlatList extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   flats: []
    // }
  }

  // componentWillMount() {
  //   console.log(this.props.flats)
  //   this.setState = {
  //     flats: this.props.flats
  //   }
  // }

  render() {

    return (
      <div className="flat-list">
        {this.props.flats.map( f => {
          return <Card id={f.id} key={f.id} description={f.name} price={f.price} currency={f.priceCurrency}/>
        })}
      </div>);
  }
}

export default FlatList;
