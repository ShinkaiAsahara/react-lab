import React, { useState } from "react";
import ChargingPort from "./ChargingPort";
import "./App.css";

const App = () => {
  const [chargingPorts, setChargingPorts] = useState(
    Array(10).fill({ timeIn: null, timeOut: null, fee: 0 }) //box
  );

  const handleStartSession = (portId) => {
    const updatedPorts = [...chargingPorts];
    updatedPorts[portId - 1].timeIn = new Date();
    setChargingPorts(updatedPorts);
  };

  const handleStopSession = (portId) => {
    const updatedPorts = [...chargingPorts];
    const timeOut = new Date();
    const timeIn = updatedPorts[portId - 1].timeIn;
    const timeSpent = (timeOut - timeIn) / 1000 / 60 / 60; // in hours
    const fee = Math.ceil(timeSpent) * 10; // fee calculation

    updatedPorts[portId - 1] = { timeIn: null, timeOut, fee };
    setChargingPorts(updatedPorts);
  };

  return (
    <div className="app-container">
      <h1>Ellry Cafe Charging Ports</h1>
      <p>We offer 10 charging ports. Each port costs 10 pesos per hour.</p>
      <div className="charging-ports">
        {chargingPorts.map((port, index) => (
          <ChargingPort
            key={index}
            portId={index + 1}
            portState={port}
            onStartSession={handleStartSession}
            onStopSession={handleStopSession}
          />
        ))}
      </div>
    </div>
  );
};

export default App;