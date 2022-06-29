import { useState, useRef, useEffect } from "react";
import latlng from "latitude-longitude";
const Map = () => {
  const sydney = { 
    lat: 40.72609295152872, 
    lng: 73.97499628519203
}
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: sydney,
        zoom: 12,
      }));
    }
  }, [ref, map]);


  return <div className="map" ref={ref}></div>;
};

export default Map;

