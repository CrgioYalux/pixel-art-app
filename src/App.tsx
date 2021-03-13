import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ColorPalette from './components/ColorPalette';
import Menu from './components/Menu';

interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

const App:React.FC = () => {
  const [pincelColor, setPincelColor] = useState<string>('black');
  const [options, setOptions] = useState<options>({blankSpaceVisibility: true, bordersVisibility: true});
  
  return (
    <div className='App'>
      <Board level={20} pincelColor={pincelColor} options={options}/>
      <ColorPalette changePincelColor={setPincelColor}/>
      <Menu options={options} setOptions={setOptions}/>
    </div>
  );
};

export default App;
