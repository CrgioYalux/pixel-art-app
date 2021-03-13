import React, { useState } from 'react';
import { getArray } from '../../helpers/getArray';
import './Board.css';

interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

interface Props {
  level: number;
  pincelColor: string;
  options: options;
};

const Board : React.FC<Props> = ({ level, pincelColor, options }) => {
  const [board, setBoard] = useState<string[][]>(getArray(level));

  const handleActivation = (event:React.MouseEvent<HTMLDivElement>) => {
    const { position } : any = event.currentTarget.dataset;
    const array : number[] = position.split(',');
    const coors : number[] = array.map(i => Number(i));
    const x : number = coors[0];
    const y : number = coors[1];
    
    setBoard((current):string[][] => {
      current[x][y] = pincelColor;
      return [...current];
    });

  };


  const styleForBlankSpaces = (color:string): string | null  => {
    if (color === 'white' && !options.blankSpaceVisibility) return 'not-visible';
    return null;
  }

  const styleForBordersAndColor = (color:string): object => {
    if (options.bordersVisibility) return { backgroundColor: `#${color}`, outline: '1px solid rgba(0,0,0,0.1)'};
    else return { backgroundColor: `#${color}`, outline: `none` };
  }

  return (
    <div className='board-frame' id='board-frame'>
      {board.map((row:string[], idxRow:number) => {
        return (
          <div className='board-row' key={idxRow}>
            {row.map((color:string, idxCol:number) => 
              <div 
                onClick={handleActivation} 
                className={['board-cell', styleForBlankSpaces(color)].join(' ')} 
                key={idxCol}
                data-position={[idxRow, idxCol]} 
                style={styleForBordersAndColor(color)}>
              </div>)}
          </div>
        )}
      )}
    </div>
  );
};

export default Board;


// className={['board-cell'].join(' ')}