import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ColorPalette from './components/ColorPalette';
import { screenshotElement } from './helpers/screenshot';
interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

const App:React.FC = () => {
  const [pincelColor, setPincelColor] = useState<string>('black');
  const [options, setOptions] = useState<options>({blankSpaceVisibility: true, bordersVisibility: true});

  return (
    <div className="App">
      <Board level={20} pincelColor={pincelColor} options={options}/>
      <ColorPalette changePincelColor={setPincelColor}/>
      <div className="options">
        <button className="button" onClick={() => setOptions((current:options):options => { return {blankSpaceVisibility:!current.blankSpaceVisibility, bordersVisibility:current.bordersVisibility}})}>toggle blank spaces existence</button>
        <button className="button" onClick={() => setOptions((current:options):options => { return {blankSpaceVisibility:current.blankSpaceVisibility, bordersVisibility:!current.bordersVisibility}})}>toggle borders visibility</button>
        <button className="button" onClick={() => screenshotElement('board-frame')}>download draw</button>
      </div>
    </div>
  );
};

export default App;
