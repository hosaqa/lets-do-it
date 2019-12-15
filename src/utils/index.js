const arrayToMap = (arr) => {
    const map = {};
  
    arr.forEach(item => {
      map[item] = 'x';
    })
  
    return map;
}

export {arrayToMap};