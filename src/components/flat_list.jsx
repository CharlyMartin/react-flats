import React, { Component } from 'react';

import Flat from './flat';


class FlatList extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     flats: []
  //   }
  // }

  // componentWillMount() {
  //   console.log(this.props.flats)
  //   this.setState = {
  //     flats: this.props.flats
  //   }
  // }

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((f) => {
          return <Flat
            id={f.id}
            key={f.id}
            description={f.name}
            price={f.price}
            lat={f.lat}
            lng={f.lng}
            currency={f.priceCurrency}
            clickFunction={this.props.clickFunction}
          />
        })}
      </div>);
  }
}

export default FlatList;
