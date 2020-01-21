import React, { Component, useEffect, useState, Fragment, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'

import ModalGet from '../src/components/ModalGet';
import ModalError from '../src/components/ModalError';
import { addName } from './actions'

 function PokemonDetail ({props, match, dispatch}) { 

  const id = match.params.id;

  // set initial state
  const [name, setName] = useState();
  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mathRandom, setMathRandom] = useState();
  const [generalError, setGeneralError] = useState(false);
  let bodyDOM = document.getElementsByTagName("body")[0];

  const getData = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
        if(response.data) {
          const data = response.data
          setName(data.name)
          setFrontImage(data.sprites.front_default)
          setBackImage(data.sprites.back_default)
          setTypes(data.types)
          setMoves(data.moves)
        }
      }
    ).catch(error => {
        setGeneralError(true)
        setTimeout(()=>{ setGeneralError(false) }, 3000); // to close error modal automatically

    })
  }
  const add = () =>{
    setShowModal(true);
    setMathRandom(Math.random()); // set math random for possibilities being caught 
   // setIdCollection([...idCollection, id])
  }
  const submitPokemonName = (e) => {
    let pokemonName = document.getElementById("pokemon-name").value;
    if(e.keyCode === 13) { // submit if user presses ENTER
     // setNameCollection([...nameCollection, pokemonName])
      dispatch(addName(pokemonName))
      setShowModal(false)
      // if(pokemonNameCaught.includes(name) === false) {
      //   setPokemonNameCaught([...pokemonNameCaught, name])
      // }
    }
  }
  useEffect(()=>{
    getData(id);
    showModal ? bodyDOM.classList = "scroll-locked" : bodyDOM.classList = "" // add scroll locked so scroll bar deactivates 

  }, [showModal])

  return (
    <div className="container pokemon-detail">

        <Link to="/pokemon-list" className="back-link"> <img src="/chevron-right.jpg" alt="back" className="chevron-right" />Back to Pokemon List</Link>
      
        <img src={frontImage}
            className="pokemon-img"
            onMouseOver={e => (e.currentTarget.src = backImage)} 
            onMouseOut={e => (e.currentTarget.src = frontImage)}
            alt={name}
        />
        <div className="types">
          Type: {types.map((type, index) => {
            return (<Fragment>{type.type.name}{index < types.length - 1  ? ', ' : ''}</Fragment>)
          })}
        </div>
        <div className="moves">
          Move: {moves.map((move, index)=> {
            return (<Fragment>{move.move.name}{index < moves.length - 1  ? ', ' : ''}</Fragment>)
          })}
        </div>
        <div className="catch-me">
          <span className="label animated fadeInDown">Catch me</span>
          <img src="/pokemon-ball.png" className="btn-catch" onClick={() => add()} />
        </div>

      {showModal &&
        (<ModalGet
          status={mathRandom > 0.5 ? "Success" : "Failed"}
          wording={mathRandom > 0.5 ? "You've caught it. Congrats!" : "Fret not! Keep catching!"}
          closeModal={()=> setShowModal(false) }
          onKeyUp={(e) => submitPokemonName(e)}
        />)
      }
      {generalError && (
        <ModalError />
      )}


    </div>
 
  );

}


export default connect() (PokemonDetail);

