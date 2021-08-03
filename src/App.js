import logo from './logo.svg';
import './App.css';

import NumState from './components/NumState/NumState';
import ArrayState from './components/ArrayState/ArrayState';
import ObjectState from './components/ObjectState/ObjectState';

function App() {
  return (
    <>
    <h1>Num State</h1>
    <NumState/>
    <h1>Array State</h1>
    <ArrayState/>
    <h1>Object State</h1>
    <ObjectState/>
    </>
  );
}

export default App;
