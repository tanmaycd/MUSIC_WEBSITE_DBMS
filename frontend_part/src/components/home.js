import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchSongs from './searchsongs';
const Home = () => {
  

 
  return (
    <div>
      <h2>home</h2>
      <SearchSongs />

    </div>
  );
};

export default Home;
