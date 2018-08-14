import React from 'react';
import Flat from './flat';


const FlatList = (props) => {
  return (
    <div className="flat-list">

      {props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            // Passing the whole flat obj and exploding it on the other side
            key={flat.id}
            index={index}
            updateFunction={props.updateFunction}
            selected={flat.id === props.selected.id}
          />);
      })}
    </div>);
};

export default FlatList;
