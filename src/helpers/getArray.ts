const range = (size:number):string[] => {
  return Array.from(Array(size).keys()).map((i) => String(i));
}

export const clearArray = (array:Array<string>):Array<string> => {
  return array.map((value:string) => value = 'white')
}

export const getArray = (level:number):Array<string[]> => {
  const rows : string[] = range(level);
  
  return rows.map(() :string[] => {
    return [...rows.map((value:string) => value = 'white')]
  });
}
