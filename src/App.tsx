import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import ColorPalette from './components/ColorPalette';
import Menu from './components/Menu';
import { getArray } from './helpers/getArray';

interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

const App:React.FC = () => {
  const [board, setBoard] = useState<string[][]>(getArray(40));
  const [pincelColor, setPincelColor] = useState<string>('black');
  const [options, setOptions] = useState<options>({blankSpaceVisibility: true, bordersVisibility: true});

  return (
    <div className='App'>
      <Board pincelColor={pincelColor} options={options} board={board} setBoard={setBoard}/>
      <ColorPalette changePincelColor={setPincelColor}/>
      <Menu options={options} setOptions={setOptions} setBoard={setBoard}/>
    </div>
  );
};

export default App;
