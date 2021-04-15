import React, { useState, Component } from 'react';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';


import { auth, provider } from './firebase';
import firestore from './firebase';
import "./signOut.css"

function Signout() {
  return auth.currentUser && (
    <Button id="signout__button" variant="outlined" color="purple" size = "small"className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => auth.signOut()}>Sign Out</Button>
  )
}

export default Signout;
