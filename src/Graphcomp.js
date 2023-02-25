import React, { useEffect, useState } from "react";
import LineChart from "./components/LineChart";

export const Graphcomp = ({ graphdata, fnc }) => {
  //   const [modified, setModified] = useState({});
  //   const modfunc = () => {
  let mydata = {
    labels: graphdata.data.map((data) => data.time),
    datasets: [
      {
        label: "Voltage",
        data: graphdata.data.map((data) => data.voltage),
      },
    ],
  };

  //     setModified(mydata);
  //   };

  //   setModified(mydata);
  //   useEffect(() => {
  //     modfunc();
  //   }, []);

  return (
    <div className="flex flex-col justify-start items-center space-y-2 bg-blue-400 p-2 rounded-md text-blue-100 w-screen  h-screen">
      <div className="bg-blue-700 p-2 justify-start items-center rounded-md">
        <h1 className="self-center text-blue-100 text-3xl">PATIENT DETAILS</h1>
        <div className="flex flex-row space-x-2 items-center">
          <h1>Name:</h1>{" "}
          <h1 className="text-white text-xl ">{graphdata.name}</h1>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <h1>Age:</h1> <h1 className="text-white text-xl"> {graphdata.age}</h1>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <h1>Patient ID:</h1>{" "}
          <h1 className="text-white text-xl">{graphdata.patient_id}</h1>
        </div>
      </div>
      <div className=" bg-white w-2/3 h-auto">
        <LineChart chartData={mydata} />
      </div>
      <button className="bg-green-500 p-2 rounded-md text-white" onClick={fnc}>
        SELECT NEW
      </button>
      {console.log("modded", mydata)}
    </div>
  );
};
