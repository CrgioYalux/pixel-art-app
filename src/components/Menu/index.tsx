import React from 'react';
import { screenshotElement } from '../../helpers/screenshot';
import OpenMenuBT from './OpenMenuBT';
import './Menu.css';
import { clearArray } from '../../helpers/getArray';

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
    <>
      <OpenMenuBT />
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
  </>
  );
};

export default Menu;