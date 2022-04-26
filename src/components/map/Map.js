import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeoLocation from "./UseGeoLocation";

const markerIcon = new L.Icon({
  iconUrl: require("./marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

export default function MapComponent() {
  const [center, setCenter] = useState({ lat: 50.06914, lng: 19.9547 });
  const mapRef = useRef();
  console.log(mapRef)
  const location = useGeoLocation();
  console.log('location', location)

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        17,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Got lost while running?</h2>
          <p>Use map and locate yourself</p>
          <div className="col">
            <MapContainer center={center} zoom={10} ref={mapRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me
          </button>
        </div>
      </div>
    </>
  );
};