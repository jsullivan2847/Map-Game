import Map from './components/Map';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import { Route } from 'react-router-dom';
import './App.css';
// import latlng from "latitude-longitude";

function App() {

  const key = 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA'

  const randomLocation = () => {
    let lng = Math.random() * (180 - (-180) + -180).toFixed(6);
    let lat = Math.random() * (90 - (-90) + -90).toFixed(6);
    return {lat: lat, lng: lng};
  }

  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <div className="App">
      <div className='maps'>
      <Route>
      <Wrapper apiKey={key} render={render}>
        <Map theClass='map1' random={randomLocation}/>
        <Map theClass='map2' random={randomLocation} />
      </Wrapper>
      </Route>
      </div>
    </div>
  );
}

export default App;
