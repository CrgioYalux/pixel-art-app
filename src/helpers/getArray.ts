const range = (size:number):string[] => {
  return Array.from(Array(size).keys()).map((i) => String(i));
}

export const clearArray = (array:Array<string[]>):Array<string[]> => {
  // console.log(array.map((row:string[]):string[] => {
  //   return [...row.map((col:string) => col = 'white')];
  // })); 
  return array.map((row:string[]):string[] => {
    return [...row.map((col:string) => col = 'transparent')];
  })
}

export const getArray = (level:number):Array<string[]> => {
  const rows : string[] = range(level);
  
  return rows.map(() :string[] => {
    return [...rows.map((value:string) => value = 'white')]
  });
}
