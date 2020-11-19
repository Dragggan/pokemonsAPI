import React from "react";
import './loader.css';

const SpinnerPage = () => {
  return (
    <>
      <div className="spinner-border" role="status" >
        <span className="sr-only" style={{textAlign:"center"}}>Loading...</span>
      </div>
    </>
  );
}

export default SpinnerPage;