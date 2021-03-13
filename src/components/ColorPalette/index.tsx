import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './ColorPalette.css';
import { flatArray } from '../../helpers/flatArray';
import Spinner from '../loader';

const getColors = async (amount:number) : Promise<string[] | undefined> => {
  try {
    const response : AxiosResponse = await axios.get(`https://www.colr.org/json/schemes/random/${amount}`);
    const { schemes } : { schemes: object[] } = response.data;
    const arrayColors = schemes.map((scheme : any) : string[][] => {
      return scheme.colors;
    });
    const flattedArray : string[] = arrayColors.reduce(flatArray, []);
    return flattedArray;
  }
  catch (error) {
    console.log(error);
  };
};

interface Props {
  changePincelColor : React.Dispatch<React.SetStateAction<string>>
}

const ColorPalette : React.FC<Props> = ({ changePincelColor }) => {
  const [colors, setColors] = useState<string[] | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const refreshPalette = () => {
    getColors(7).then(setColors);
  }

  useEffect(() => {
    refreshPalette();
  }, []);

  const handleColorPick = (color:string) => {
    changePincelColor(color);
    setSelectedColor(color);
  }

  return (
    <>
    <div className="palette-frame">
      {
      !colors 
        ? <Spinner />
        : colors.map((color:string, idx:number) => 
            <div
              onClick={() => handleColorPick(color)}
              className={['color-opt', selectedColor === color ? 'selected' : 'not-selected'].join(' ')}
              style={{backgroundColor: `#${color}`}}
              key={idx}>
            </div>
          )
      }
    </div>
    </>
  );
};

export default ColorPalette;
