import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HighlightCard = ({className}) => {
  return (
    <div className="bg-black text-white p-6 rounded-2xl shadow-md">
      <h4 className="text-md font-bold mb-4">Highlight Progress</h4>
      <div className="flex justify-between items-center">
        <div className="w-20 h-20">
          <CircularProgressbar
            value={88}
            text="88%"
            styles={buildStyles({
              pathColor: "#3B82F6",
              textColor: "#FFF",
            })}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">$5,330.96</h2>
          <p className="text-xs">Spending</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
