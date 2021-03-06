import React from 'react';
import './Board.css';
interface options {
  blankSpaceVisibility: boolean;
  bordersVisibility: boolean;
}

interface Props {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  pincelColor: string;
  options: options;
};

const Board : React.FC<Props> = ({ board, setBoard, pincelColor, options }) => {

  const paintCell = (event:React.MouseEvent<HTMLDivElement>) => {
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
    return { backgroundColor: `#${color}`, outline: `none` };
  }

  return (
    <>
    <div className='board-frame' id='board-frame'>
      {board.map((row:string[], idxRow:number) => {
        return (
          <div className='board-row' key={idxRow}>
            {row.map((color:string, idxCol:number) => 
              <div 
                onClick={paintCell} 
                className={['board-cell', styleForBlankSpaces(color)].join(' ')} 
                key={idxCol}
                data-position={[idxRow, idxCol]} 
                style={styleForBordersAndColor(color)}>
              </div>)}
          </div>
        )}
      )}
    </div>
    </>
  );
};

export default Board;

