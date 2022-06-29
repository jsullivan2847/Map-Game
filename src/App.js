import Map from './components/Map';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import './App.css';

function App() {

  const key = 'AIzaSyBrL26kHgHcE6O9YC-F7mbxCXhwscpSsdA'

  // const getMap = async () => {
  //   const response = await fetch (googleUrl, {
  //     mode: 'cors',
  //     headers: {'Access-Control-AllowOrigin': '*'}
  // });
  //   console.log(response)
  //   const data = await response;
  //   return data
  // }
  // console.log(getMap())

  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <div className="App">
      <Wrapper apiKey={key} render={render}>
        <Map/>
      </Wrapper>
    </div>
  );
}

export default App;
