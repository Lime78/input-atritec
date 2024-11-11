import React, { useState } from 'react';
import logga from './assets/logga.png';
import train from './assets/train.jpg'
import './App.css';

function App() {
  const [checkboxes, setCheckboxes] = useState({
    distance: null, // [5 meter, 10 meter]
    blurring: null, // [Yes, No]
    stitchingRadius: null, // [2, 5, 20, 100]
    cameraStitching: null, // [Front, Back, Both]
    export360: null, // [Yes, No]
    exportCameraImages: null, // [Camera ID, Rotation, Camera Type]
    colorize: null, // [Yes, No]
  });

  const handleRadioChange = (section, value) => {
    setCheckboxes(prevState => ({
      ...prevState,
      [section]: value,
    }));
  };

  return (
    <div className="App">
      <h1>Pipeline Mall</h1>

      <img src={logga} alt="Logo" className="logo" />

      <div className="section">
        <h2>Images</h2>

        <div className="radio-group">
          <h3>Trigger distance between images for output</h3>
          <label>
            5 meter
            <input
              type="radio"
              name="distance"
              checked={checkboxes.distance === 5}
              onChange={() => handleRadioChange('distance', 5)}
            />
          </label>
          <label>
            10 meter
            <input
              type="radio"
              name="distance"
              checked={checkboxes.distance === 10}
              onChange={() => handleRadioChange('distance', 10)}
            />
          </label>
        </div>

        <div className="radio-group">
          <h3>Blurring Objects</h3>
          <label>
            Yes
            <input
              type="radio"
              name="blurring"
              checked={checkboxes.blurring === 'Yes'}
              onChange={() => handleRadioChange('blurring', 'Yes')}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="blurring"
              checked={checkboxes.blurring === 'No'}
              onChange={() => handleRadioChange('blurring', 'No')}
            />
          </label>
          <input type="text" placeholder="Car, People" />
        </div>

        <div className="radio-group">
          <h3>Stitching radius</h3>
          <label>
            2
            <input
              type="radio"
              name="stitchingRadius"
              checked={checkboxes.stitchingRadius === 2}
              onChange={() => handleRadioChange('stitchingRadius', 2)}
            />
          </label>
          <label>
            5
            <input
              type="radio"
              name="stitchingRadius"
              checked={checkboxes.stitchingRadius === 5}
              onChange={() => handleRadioChange('stitchingRadius', 5)}
            />
          </label>
          <label>
            20
            <input
              type="radio"
              name="stitchingRadius"
              checked={checkboxes.stitchingRadius === 20}
              onChange={() => handleRadioChange('stitchingRadius', 20)}
            />
          </label>
          <label>
            100
            <input
              type="radio"
              name="stitchingRadius"
              checked={checkboxes.stitchingRadius === 100}
              onChange={() => handleRadioChange('stitchingRadius', 100)}
            />
          </label>
        </div>

        <div className="radio-group">
          <h3>Which cameras to stitch</h3>
          <label>
            Front
            <input
              type="radio"
              name="cameraStitching"
              checked={checkboxes.cameraStitching === 'Front'}
              onChange={() => handleRadioChange('cameraStitching', 'Front')}
            />
          </label>
          <label>
            Back
            <input
              type="radio"
              name="cameraStitching"
              checked={checkboxes.cameraStitching === 'Back'}
              onChange={() => handleRadioChange('cameraStitching', 'Back')}
            />
          </label>
          <label>
            Both Cameras
            <input
              type="radio"
              name="cameraStitching"
              checked={checkboxes.cameraStitching === 'Both'}
              onChange={() => handleRadioChange('cameraStitching', 'Both')}
            />
          </label>
        </div>

        <div className="radio-group">
          <h3>Export 360 images/panoramas</h3>
          <label>
            Yes
            <input
              type="radio"
              name="export360"
              checked={checkboxes.export360 === 'Yes'}
              onChange={() => handleRadioChange('export360', 'Yes')}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="export360"
              checked={checkboxes.export360 === 'No'}
              onChange={() => handleRadioChange('export360', 'No')}
            />
          </label>
        </div>

        <div className="radio-group">
          <h3>Export camera-level images for formula annotation</h3>
          <label>
            Camera ID (0-5)
            <input
              type="radio"
              name="exportCameraImages"
              checked={checkboxes.exportCameraImages === 'Camera ID'}
              onChange={() => handleRadioChange('exportCameraImages', 'Camera ID')}
            />
          </label>
          <label>
            Rotation for the image of the camera
            <input
              type="radio"
              name="exportCameraImages"
              checked={checkboxes.exportCameraImages === 'Rotation'}
              onChange={() => handleRadioChange('exportCameraImages', 'Rotation')}
            />
          </label>
          <label>
            Which camera: back/front/both
            <input
              type="radio"
              name="exportCameraImages"
              checked={checkboxes.exportCameraImages === 'Which camera'}
              onChange={() => handleRadioChange('exportCameraImages', 'Which camera')}
            />
          </label>
        </div>
      </div>

      <img src={train} alt='train' className='train-img' />

      <div className="section">
        <h3>Pointclouds</h3>
        <div className="radio-group">
          <h3>Colorize</h3>
          <label>
            Yes
            <input
              type="radio"
              name="colorize"
              checked={checkboxes.colorize === 'Yes'}
              onChange={() => handleRadioChange('colorize', 'Yes')}
            />
          </label>
          <label>
            No
            <input
              type="radio"
              name="colorize"
              checked={checkboxes.colorize === 'No'}
              onChange={() => handleRadioChange('colorize', 'No')}
            />
          </label>
        </div>

        <div className="radio-group">
          <h3>CRS Output</h3>
          <input type="text" placeholder="List of outputs" />
        </div>
      </div>
    </div>
  );
}

export default App;
