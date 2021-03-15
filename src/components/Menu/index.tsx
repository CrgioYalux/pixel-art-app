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
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}

const Menu : React.FC<Props> = ({ options, setOptions, setBoard }) => {

  const clearCanvas = () => {
    setBoard((current:string[][]):string[][] => clearArray(current));
    const list:HTMLCollection | undefined = document.getElementById('board-frame')?.children;
    if (list) {
      for (let rows = 0; rows < list.length; rows++) {
        for (let cols = 0; cols < list[rows].children.length; cols++) {
          (options.bordersVisibility) 
          ? list[rows].children[cols].setAttribute('style', 'backgroundColor: white; outline: 1px solid rgba(0,0,0,0.1)')
          : list[rows].children[cols].setAttribute('style', 'backgroundColor: white; outline: none')
        }
      }
    }
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