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

  