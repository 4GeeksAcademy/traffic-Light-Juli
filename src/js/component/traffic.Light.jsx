import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  return (
    <div className="d-flex flex-column justify-content-start align-items-center"
      style={{top: 0, position: "fixed", width: "100vw", height: "100vh", backgroundColor: "#5261b3",}}>
      
    <div className="bg-dark" style={{ width: "30px", height: "150px" }}></div>
     
    <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center"
      style={{ width: "200px", minHeight: showPurple ? "500px" : "400px" }}>

       {/*  lucesitas  */}  
        <div
          onClick={() => setColor("red")}
          className={"bg-danger rounded-circle " + (color === "red" ? "onLightRed" : "offLight")}
          style={{ width: "100px", height: "100px" }}
        ></div>

        
        <div
          onClick={() => setColor("yellow")}
          className={"bg-warning rounded-circle " + (color === "yellow" ? "onLightYellow" : "offLight")}
          style={{ width: "100px", height: "100px" }}
        ></div>

        <div
          onClick={() => setColor("green")}
          className={"bg-success rounded-circle " + (color === "green" ? "onLightGreen" : "offLight")}
          style={{ width: "100px", height: "100px" }}
        ></div>

      
        {showPurple && (
          <div
            onClick={() => setColor("purple")}
            className={"bg-purple rounded-circle " + (color === "purple" ? "onLightPurple" : "offLight")}
            style={{ backgroundColor: "purple", width: "100px", height: "100px" }}
          ></div>
        )}
      </div>

       {/* botoncito */}
      <button
        className="btn btn-light mt-3"
        onClick={() => setShowPurple(true)} 
      >
        Agregar luz violeta!
      </button>
    </div>
  );
};

export default TrafficLight;
