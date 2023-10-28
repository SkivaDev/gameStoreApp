// import React from "react";

// import 'leaflet/dist/leaflet.css'

// import { Marker, Popup } from "react-leaflet";
// import { MapContainer } from "react-leaflet/MapContainer";
// import { TileLayer } from "react-leaflet/TileLayer";
// import { Icon } from "leaflet";

// const MapComponent = () => {

//   const position = [-12.066044854972278, -77.03688586494671] 

//   const customIcon = new Icon({
//     iconUrl: 'https://cdn-icons-png.flaticon.com/512/3963/3963064.png',
//     iconSize: [65, 65],
//   })

//   return (
//     <MapContainer center={position} zoom={13} >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position} icon={customIcon}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapComponent;
