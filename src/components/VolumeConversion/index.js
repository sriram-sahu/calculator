import React, { useState, useEffect } from "react";
// import "./index.css";

const VolumeConversion = () => {
  const [inputVolume, setInputVolume] = useState("");
  const [outputVolume, setOutputVolume] = useState(0);
  const [inputVolumeType, setInputVolumeType] = useState("liters");
  const [outputVolumeType, setOutputVolumeType] = useState("liters");
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const onAddNumber = (val) => {
    setInputVolume(inputVolume + val);
    convertVolume();
  };

  const onChangeInputType = (event) => {
    setInputVolumeType(event.target.value);
    convertVolume();
  };

  const onChangeOutputType = (event) => {
    setOutputVolumeType(event.target.value);
    convertVolume();
  };

  const deleteElement = () => {
    setInputVolume(
      inputVolume.replace(inputVolume[inputVolume.length - 1], "")
    );
  };

  function convertVolume() {
    let result;
    let input = inputVolume;
    if (inputVolume === "") {
      input = 0;
    }
    if (inputVolumeType === "liters") {
      if (outputVolumeType === "gallons") {
        result = parseInt(input) * 0.264172;
      } else if (outputVolumeType === "milliliters") {
        result = parseInt(input) * 1000;
      } else {
        result = parseInt(input);
      }
    } else if (inputVolumeType === "milliliters") {
      if (outputVolumeType === "liters") {
        result = parseInt(input) / 1000;
      } else if (outputVolumeType === "gallons") {
        result = parseInt(input) * 0.000264172;
      } else {
        result = parseInt(input);
      }
    } else if (inputVolumeType === "gallons") {
      if (outputVolumeType === "liters") {
        result = parseInt(input) * 3.78541;
      } else if (outputVolumeType === "milliliters") {
        result = parseInt(input) * 3785.41;
      } else {
        result = parseInt(input);
      }
    }
    setOutputVolume(result);
  }

  useEffect(() => {
    convertVolume();
  });
  return (
    <div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={inputVolume} />
          <select
            name='volume'
            className='inputs'
            id='volume'
            onChange={onChangeInputType}
          >
            <option value='liters'>liters</option>
            <option value='milliliters'>milliliters</option>
            <option value='gallons'>gallons</option>
          </select>
        </div>
      </div>
      <div>
        <div className='display'>
          <input type='text' className='input' value={outputVolume} />
          <select
            name='volume'
            className='inputs'
            id='volume'
            onChange={onChangeOutputType}
          >
            <option value='liters'>liters</option>
            <option value='milliliters'>milliliters</option>
            <option value='gallons'>gallons</option>
          </select>
        </div>
      </div>
      <div>
        {numbers.map((each) => (
          <button
            key={each}
            className='btn btn-danger button1'
            onClick={() => onAddNumber(each)}
          >
            {each}
          </button>
        ))}
        <button
          className='btn btn-danger button1'
          onClick={() => {
            setInputVolume("");
          }}
        >
          C
        </button>
        <button className='btn btn-danger button1' onClick={deleteElement}>
          X
        </button>
      </div>
    </div>
  );
};

export default VolumeConversion;
