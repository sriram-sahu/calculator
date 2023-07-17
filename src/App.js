import React, { useState } from "react";
import NormalCalculator from "./components/NormalCalculator";
import BasicCalculator from "./components/BasicCalculator";
import TimeConversion from "./components/TimeConversion";
import TemperatureConversion from "./components/TemperatureConversion";
import LengthConversion from "./components/LengthConverter";
import WeightConversion from "./components/WeightConverter";
import AngleConversion from "./components/AngleConversion";
import DataTypeConversion from "./components/dataTypeConversion";
import SpeedConverter from "./components/SpeedConverter";
import EnergyConversion from "./components/EnergyConversion";
import AreaConversion from "./components/AreaConversion";
import VolumeConversion from "./components/VolumeConversion";
import "./App.css";

const App = () => {
  const [conversion, setConversion] = useState("BasicCalculator");
  const onChangeVal = (event) => {
    setConversion(event.target.value);
  };

  const switchDetails = () => {
    switch (conversion) {
      case "BasicCalculator": {
        return <BasicCalculator />;
      }
      case "TimeConversion":
        return <TimeConversion />;
      case "TemperatureConversion":
        return <TemperatureConversion />;
      case "LengthConversion":
        return <LengthConversion />;
      case "WeightConversion":
        return <WeightConversion />;
      case "AngleConversion":
        return <AngleConversion />;
      case "DataTypeConversion":
        return <DataTypeConversion />;
      case "SpeedConverter":
        return <SpeedConverter />;
      case "EnergyConversion":
        return <EnergyConversion />;
      case "AreaConversion":
        return <AreaConversion />;
      case "VolumeConversion":
        return <VolumeConversion />;
      default:
        return null;
    }
  };

  return (
    <div className='app'>
      <div className='calculator'>
        <div className='display'>
          <h1 className='heading'>Calculator</h1>
          <div className='panel'>
            <div className='lines'></div>
          </div>
        </div>
        <div>
          <select
            name='calculator'
            id='calculator'
            className='inputs'
            onChange={onChangeVal}
          >
            <option value='BasicCalculator'>Basic Calculator</option>
            <option value='TimeConversion'>Time Conversion</option>
            <option value='TemperatureConversion'>
              Temperature Conversion
            </option>
            <option value='LengthConversion'>Length Conversion</option>
            <option value='WeightConversion'>Weight Conversion</option>
            <option value='AngleConversion'>Angle Conversion</option>
            <option value='DataTypeConversion'>Data Type Conversion</option>
            <option value='SpeedConverter'>Speed Converter</option>
            <option value='EnergyConversion'>Energy Conversion</option>
            <option value='AreaConversion'>Area Conversion</option>
            <option value='VolumeConversion'>Volume Conversion</option>
          </select>
        </div>
        <div className='center'>{switchDetails()}</div>
      </div>
    </div>
  );
};

export default App;
