import { useState, useRef, useEffect } from "react";
const Map = ({theClass, random,}) => {
  

  
  const nyc = { 
    lat: 40.7306, 
    lng: -73.9352,
}

  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: nyc,
        zoom: 12,
      }));
    }
  }, [ref, map]);

  // interface MapProps extends google.maps.MapOptions {
  //   style: { [key: string]: string };
  //   onClick?: (e: google.maps.MapMouseEvent) => void;
  //   onIdle?: (map: google.maps.Map) => void;
  // }
  
  // const Map: React.FC<MapProps> = ({
  //   onClick,
  //   onIdle,
  //   children,
  //   style,
  //   ...options
  // }) => {}

  console.log('hel')



  return <div className={theClass}ref={ref}></div>;
};

export default Map;

