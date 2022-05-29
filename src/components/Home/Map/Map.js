import React from "react";
import map from "../../../images/map.png";

const Map = () => {
  return (
    <div style={{ background: "#000000", color: "#fff" }}>
      <div className="container">
        <div className="map-area py-4">
          <div className="row d-flex align-items-center px-2">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img width="60%" src={map} alt="map" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1>
                <span style={{ color: "#10b377" }}>HIKERO's</span> logistics
                services cover 159 countries all over the globe.
              </h1>
              <p>
                We guarantee the fastest service nationwide for any of your
                logistics needs.
              </p>
              <button className="btn btn-success btn-lg">
                See Coverage Area
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
