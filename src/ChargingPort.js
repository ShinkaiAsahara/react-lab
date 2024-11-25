import React from "react";

const ChargingPort = ({ portId, portState, onStartSession, onStopSession }) => {
  const { timeIn, timeOut, fee } = portState;

  // Format time in HH:MM AM/PM format
  const formatTime = (date) =>
    date
      ? date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      : "-";

  return (
    <div className="charging-port">
      <h3>Charging Port {portId}</h3>
      <div className="port-info">
        <p>Status: {timeIn ? "In Use" : "Available"}</p>
        {!timeIn ? (
          <button
            className="start-button"
            onClick={() => onStartSession(portId)}
          >
            Start Sessio
          </button>
        ) : (
          <>
            <p>Time In: {formatTime(timeIn)}</p>
            <button
              className="stop-button"
              onClick={() => onStopSession(portId)}
            >
              Stop Session
            </button>
            {timeOut && <p>Time Out: {formatTime(timeOut)}</p>}
            {fee > 0 && <p>Fee: {fee} pesos</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default ChargingPort;