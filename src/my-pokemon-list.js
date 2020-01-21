import React, { Component, useEffect, useState, useContext, Fragment } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import EmptyComponent from '../src/components/EmptyComponent';
import { removeName } from './actions'
import { addOwnedTotal} from './actions'

function MyPokemonList ({props, names, dispatch}) {  
  //get context value

  const removePokemonList = (name, index) => {

    // names.addNames.splice(idx, 1);
    // setNameCollection([...names.addNames])
    dispatch(removeName(index))
  }

  return (
    <div className="container pokemon-list-container">
      <div className="owned-total">Owned Total: {}</div>
      <div>
      {
        names.names.length === 0 ? 
        <EmptyComponent wording="You don't have a Pokemon yet! Catch one!"/> : 
        names.names.map((name, index) => {
        return (<div className="pokemon-list">{name} 
          <img src="./remove-ic.png" className="remove-ic" onClick={()=> removePokemonList(index)}/> </div>)
      })
    } 
      { console.log("names", names)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {names: state}
};


export default connect(mapStateToProps, null)(MyPokemonList);
