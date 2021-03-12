export const flatArray = (acc:any, item:any) => {
    if(Array.isArray(item)){
        return item.reduce(flatArray, acc);
    };
    return [...acc, item];
};