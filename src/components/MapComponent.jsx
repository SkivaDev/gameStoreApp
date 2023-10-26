import './mapbox-gl.js';
import React, { useState } from "react";
import Mapkick from "mapkick";

const MapComponent = () => {
  const map = Mapkick({
    data: [
      {
        latitude: 37.7829,
        longitude: -122.419,
      },
    ],
  });

  const apiKey = process.env.MAPBOX_ACCESS_TOKEN;

  return <Mapkick style={{ height: "500px" }} apiKey={apiKey} data={map}></Mapkick>;
};

export default MapComponent;
