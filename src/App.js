import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grabbedBlock: 0,
      a: [100,75,50,25],
      b: [],
      c: [],
    }
    this.game = this.game.bind(this);
  }

  game(event){
    let stackLetter = event.target.getAttribute("data-stack");
    let grabbedItem = this.state.grabbedBlock;
    let selectedBlock = this.state[stackLetter];
    let checkA = this.state.a;
    let checkB = this.state.b;
    let checkC = this.state.c;
  
    console.log(checkB.length);
    console.log(grabbedItem);
    console.log(selectedBlock);
    console.log(selectedBlock[selectedBlock.length - 1]);
  