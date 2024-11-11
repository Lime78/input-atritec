import React, { useState } from 'react';
import './App.css';

function App() {
  const [checkboxes, setCheckboxes] = useState({
    distance: [false, false], // [5 meter, 10 meter]
    blurring: [false, false], // [Yes, No]
    stitchingRadius: [false, false, false, false], // [2, 5, 20, 100]
    cameraStitching: [false, false, false], // [Front, Back, Both]
    export360: [false, false], // [Yes, No]
    exportCameraImages: [false, false, false], // [Camera ID, Rotation, Camera Type]
    colorize: [false, false], // [Yes, No]
  });

  const handleCheckboxChange = (section, index) => {
    setCheckboxes(prevState => {
      const newState = { ...prevState };
      newState[section][index] = !newState[section][index];
      return newState;
    });
  };

  return (
    <div className="App">
      <h1>Pipeline Mall</h1>

      <div className="section">
        <h2>Images</h2>
        <div className="checkbox-group">
          <h3>Trigger distance between images for output</h3>
          <label>
            5 meter
            <input
              type="checkbox"
              checked={checkboxes.distance[0]}
              onChange={() => handleCheckboxChange('distance', 0)}
            />
          </label>
          <label>
            10 meter
            <input
              type="checkbox"
              checked={checkboxes.distance[1]}
              onChange={() => handleCheckboxChange('distance', 1)}
            />
          </label>
        </div>

        <div className="checkbox-group">
          <h3>Blurring Objects</h3>
          <label>
            Yes
            <input
              type="checkbox"
              checked={checkboxes.blurring[0]}
              onChange={() => handleCheckboxChange('blurring', 0)}
            />
          </label>
          <label>
            No
            <input
              type="checkbox"
              checked={checkboxes.blurring[1]}
              onChange={() => handleCheckboxChange('blurring', 1)}
            />
          </label>
          <input type="text" placeholder="Car, People" />
        </div>

        <div className="checkbox-group">
          <h3>Stitching radius</h3>
          <label>
            2
            <input
              type="checkbox"
              checked={checkboxes.stitchingRadius[0]}
              onChange={() => handleCheckboxChange('stitchingRadius', 0)}
            />
          </label>
          <label>
            5
            <input
              type="checkbox"
              checked={checkboxes.stitchingRadius[1]}
              onChange={() => handleCheckboxChange('stitchingRadius', 1)}
            />
          </label>
          <label>
            20
            <input
              type="checkbox"
              checked={checkboxes.stitchingRadius[2]}
              onChange={() => handleCheckboxChange('stitchingRadius', 2)}
            />
          </label>
          <label>
            100
            <input
              type="checkbox"
              checked={checkboxes.stitchingRadius[3]}
              onChange={() => handleCheckboxChange('stitchingRadius', 3)}
            />
          </label>
        </div>

        <div className="checkbox-group">
          <h3>Which cameras to stitch</h3>
          <label>
            Front
            <input
              type="checkbox"
              checked={checkboxes.cameraStitching[0]}
              onChange={() => handleCheckboxChange('cameraStitching', 0)}
            />
          </label>
          <label>
            Back
            <input
              type="checkbox"
              checked={checkboxes.cameraStitching[1]}
              onChange={() => handleCheckboxChange('cameraStitching', 1)}
            />
          </label>
          <label>
            Both Cameras
            <input
              type="checkbox"
              checked={checkboxes.cameraStitching[2]}
              onChange={() => handleCheckboxChange('cameraStitching', 2)}
            />
          </label>
        </div>

        <div className="checkbox-group">
          <h3>Export 360 images/panoramas</h3>
          <label>
            Yes
            <input
              type="checkbox"
              checked={checkboxes.export360[0]}
              onChange={() => handleCheckboxChange('export360', 0)}
            />
          </label>
          <label>
            No
            <input
              type="checkbox"
              checked={checkboxes.export360[1]}
              onChange={() => handleCheckboxChange('export360', 1)}
            />
          </label>
        </div>

        <div className="checkbox-group">
          <h3>Export camera-level images for formula annotation</h3>
          <label>
            Camera ID (0-5)
            <input
              type="checkbox"
              checked={checkboxes.exportCameraImages[0]}
              onChange={() => handleCheckboxChange('exportCameraImages', 0)}
            />
          </label>
          <label>
            Rotation for the image of the camera
            <input
              type="checkbox"
              checked={checkboxes.exportCameraImages[1]}
              onChange={() => handleCheckboxChange('exportCameraImages', 1)}
            />
          </label>
          <label>
            Which camera: back/front/both
            <input
              type="checkbox"
              checked={checkboxes.exportCameraImages[2]}
              onChange={() => handleCheckboxChange('exportCameraImages', 2)}
            />
          </label>
        </div>
      </div>

      <div className="section">
        <h3>Pointclouds</h3>
        <div className="checkbox-group">
          <h3>Colorize</h3>
          <label>
            Yes
            <input
              type="checkbox"
              checked={checkboxes.colorize[0]}
              onChange={() => handleCheckboxChange('colorize', 0)}
            />
          </label>
          <label>
            No
            <input
              type="checkbox"
              checked={checkboxes.colorize[1]}
              onChange={() => handleCheckboxChange('colorize', 1)}
            />
          </label>
        </div>

        <div className="checkbox-group">
          <h3>CRS Output</h3>
          <input type="text" placeholder="List of outputs" />
        </div>
      </div>
    </div>
  );
}

export default App;
