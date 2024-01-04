import React from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center my-5">
      <img
        src={loading}
        alt="loading"
        style={{ width: "80px", height: "80px", color: "black" }}
      />
    </div>
  );
};

export default Spinner;
