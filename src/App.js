import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Business } from './components/Business';
import { Managers } from './components/Managers';

import { objectToList } from './utils/game';

import './App.css';

function App() {
  const balance = useSelector(state => state.balance);
  const businesses = useSelector(state => state.businesses);

  return (
    <>
      <div className="App">
        <div className="side-bar">
          <img src={process.env.PUBLIC_URL + '/images/euro.jpg'} alt="Euro"/>
          <Managers/>
        </div>
        <div className="main">
          <div className="balance">
            <span>{balance.amount.toLocaleString()}€</span>
          </div>
          <div className="businesses">
            {objectToList(businesses).map(item => 
              <Business {...item} timeTaken={item.timeTaken*1000} key={item.id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
