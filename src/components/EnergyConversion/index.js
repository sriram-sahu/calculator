import React, { useState, useEffect } from "react";
// import "./index.css";

const EnergyConversion = () => {
  const [inputEnergy, setInputEnergy] = useState("");
  const [outputEnergy, setOutputEnergy] = useState(0);
  const [inputEnergyType, setInputEnergyType] = useState("joules");
  const [outputEnergyType, setOutputEnergyType] = useState("joules");

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  useEffect(() => {
    convertEnergy();
  });

  const onAddNumber = (val) => {
    setInputEnergy(inputEnergy + val);
    convertEnergy();
  };

  const onChangeInputType = (event) => {
    setInputEnergyType(event.target.value);
    convertEnergy();
  };

  const onChangeOutputType = (event) => {
    setOutputEnergyType(event.target.value);
    convertEnergy();
  };

  const deleteElement = () => {
    setInputEnergy(
      inputEnergy.replace(inputEnergy[inputEnergy.length - 1], "")
    );
  };

  function convertEnergy() {
    let result = inputEnergy;
    let input = inputEnergy;
    if (inputEnergy === "") {
      input = 0;
    }
    if (inputEnergyType === "joules") {
      if (outputEnergyType === "calories") {
        result = parseInt(input) / 4.184;
      } else if (outputEnergyType === "electronvolts") {
        result = parseInt(input) * 6.242e18;
      } else {
        result = parseInt(input);
      }
    } else if (inputEnergyType === "calories") {
      if (outputEnergyType === "joules") {
        result = parseInt(input) * 4.184;
      } else if (outputEnergyType === "electronvolts") {
        result = parseInt(input) * 3.826e19;
      } else {
        result = parseInt(input);
      }
    } else if (inputEnergyType === "electronvolts") {
      if (outputEnergyType === "joules") {
        result = parseInt(input) * 1.602e-19;
      } else if (outputEnergyType === "calories") {
        result = parseInt(input) * 2.611e-20;
      } else {
        result = parseInt(input);
      }
    }
    setOutputEnergy(result);
  }

  return (
    <div>
      <div className='display'>
        <input type='text' className='input' value={inputEnergy} />
        <select className='inputs' onChange={onChangeInputType}>
          <option value='joules'>Joules</option>
          <option value='calories'>Calories</option>
          <option value='electronvolts'>Electronvolts</option>
        </select>
      </div>
      <div className='display'>
        <input type='text' className='input' value={outputEnergy} />
        <select className='inputs' onChange={onChangeOutputType}>
          <option value='joules'>Joules</option>
          <option value='calories'>Calories</option>
          <option value='electronvolts'>Electronvolts</option>
        </select>
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
            setInputEnergy("");
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

export default EnergyConversion;
