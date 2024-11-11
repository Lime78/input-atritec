import React from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [ checkbox ] = useState(0)

  return (
    <>
    
    <h1>Pipeline mall</h1>
      {/* <div className='Definitions-container'>
        <h2>Definitons</h2>
        <p>Sessions/ Scan Sessions: Raw data</p>
        <p>Pipeline/ Templates: Web360, cirrus, road scan, optip/ annotation</p>
        <p>Delivery Folders</p>
      <input></input>
      </div> */}

      <div className='Image'>
        <p>Trigger distance between images for output </p>
            5 meter <input type="checkbox" /> 
           10 meter <input type="checkbox" />
          <p>Blurring Objects</p>
         Yes <input type="checkbox" />
           No <input type="checkbox" />
             <input type="text" />List [ Car, People ]
          <p>Stitching radius </p>
         2 <input type="checkbox" />
          5  <input type="checkbox" />
           20  <input type="checkbox" />
         100  <input type="checkbox" />
         <p></p>
      </div>
    </>
  )
}

export default App
