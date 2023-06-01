import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const BhokardanMap = () => {
  const position = [19.3948, 75.3834];

  return (
    <div>
    {/*<a href="https://goo.gl/maps/K2LyQz67sAF34WE87" target={"_blank"} width={"600"} height={"450"} frameborder={"0"} style={{border: "1px solid black"}}>Map</a>*/}
    <iframe src="https://www.google.com/maps/place/Bhokardan,+Maharashtra+431114/@20.2548064,75.7522592,14z/data=!4m6!3m5!1s0x3bda33077f812c67:0x41b663623395d638!8m2!3d20.2590232!4d75.7697582!16zL20vMGYwaDNx?entry=ttu" frameborder="0" width={"100%"} height={"100%"}></iframe>
    </div>
  );
};

export default BhokardanMap;
