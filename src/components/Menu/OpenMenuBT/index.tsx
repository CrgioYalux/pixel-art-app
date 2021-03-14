import React from 'react';
import './OpenMenuBT.css';

interface Props {

};

const OpenMenuBT : React.FC<Props> = () => {
  return (
    <>
      <input type='checkbox' id='openMenu'/>
      <label htmlFor='openMenu'>
        <div className='menuBT'>
          <div className='menuBT-inside'></div>
          <div className='menuBT-inside'></div>
          <div className='menuBT-inside'></div>
          <div className='menuBT-inside'></div>
        </div>
      </label> 
    </>
  );
};

export default OpenMenuBT;