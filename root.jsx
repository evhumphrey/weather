import React from 'react';
import Clock from './clock';
import Weather from './weather';

const Root = (() => (
  <div>
    <h1>Clock</h1>
    <Clock/>
    <h1>Weather</h1>
    <Weather/>
  </div>
));

export default Root;
