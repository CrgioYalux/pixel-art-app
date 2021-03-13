import React from 'react';
import { screenshotElement } from '../../helpers/screenshot';
import './Menu.css';

interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

interface Props {
  options: options;
  setOptions: React.Dispatch<React.SetStateAction<options>>;
}

const Menu : React.FC<Props> = ({ options, setOptions }) => {
  const clearCanvas = () => {
    console.log('clear');
  }

  return (
    <div className="menu">
      <label htmlFor='openMenu'>
        <div className="menuBT">
          <div className="menuBT-inside"></div>
        </div>
      </label>
      <input type='checkbox' id='openMenu'/>
      <div className='options'>
        <button 
          className={['button', !options.blankSpaceVisibility ? 'toggled' : null].join(' ')} 
          onClick={() => setOptions((current:options):options => { return {blankSpaceVisibility:!current.blankSpaceVisibility, bordersVisibility:current.bordersVisibility}})}>
            toggle blank spaces existence
        </button>
        <button
          className={['button', !options.bordersVisibility ? 'toggled' : null].join(' ')}
          onClick={() => setOptions((current:options):options => { return {blankSpaceVisibility:current.blankSpaceVisibility, bordersVisibility:!current.bordersVisibility}})}>
            toggle borders visibility
        </button>
        <button
          className={'button'}
          onClick={() => clearCanvas()}>
            clear canvas
        </button>
        <button
          className='button'
          onClick={() => screenshotElement('board-frame')}>
            download art
        </button>
      </div>
  </div>
  );
};

export default Menu;