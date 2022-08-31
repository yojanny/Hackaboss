import {getRandomRGB} from './utils/helpers';

import './styles.css'


function App() {
  
  return (
    <>
    <h1 style={{background: getRandomRGB()}}>{process.env.REACT_APP_TEST}</h1>
  
    <p className="important">Importante</p>
  </>
    );
}

export default App;
