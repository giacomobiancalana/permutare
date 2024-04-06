/** Restituisce tutte le possibili permutazioni di un array. */
function permutazioni(array: string[]): (string[][]) {

  function perm(arr: string[], accum: string[][]): string[][] {  // accum è un insieme di permutazioni
    if (arr.length === 0) {
      return accum;
    };

    let r: string = arr[arr.length - 1];  // prendo l'ultimo elemento di arr.
    let res: string[][] = [];  // array vuoto a cui aggiungere le nuove permutazioni

    for (let i = 0; i < accum.length; i++) {
      let internalArray: string[] = accum.shift();  // prendo il primo array dall'array di array

      if (!!internalArray) {  // && internalArray.length > 0
        for (let j = 0; j < internalArray.length + 1; j++) {
          console.log("su if: ci entro qua??", "i:", i);
          const tempInternalArray = [...internalArray];
          tempInternalArray.splice(j, 0, r);
          res.push(tempInternalArray);
        }
      } else {
        console.log("su else: ci entro qua??", "i:", i);
        res.push([r]); // vale per la prima volta
      }
    }

    return perm(arr.slice(0, -1), res);
  };

  return perm(array, [[]]); // credo che serve [[]], poichè [] non basta.
}

console.log(permutazioni(['a', 'b', 'c']));



/** 
 * Permutazione con un'unica lettera e un insieme di permutazioni
 * esempio: permLettera('a', [[b,c], [w,z]]) ritorna ->
 * -> [["a", "b", "c"], ["b", "a", "c"], ["b", "c", "a"], ["a", "w", "z"], ["w", "a", "z"], ["w", "z", "a"]]
 * */
function permLettera(lettera: string, acc: string[][]) {
  let t_res: string[][] = [];

  for (let i = 0; i < acc.length; i++) {
    for (let j = 0; j < acc[i].length + 1; j++) {
      const arrayToModify = [...acc[i]];
      arrayToModify.splice(j, 0, lettera);
      t_res.push(arrayToModify);
    }
  }
  return t_res;
};
