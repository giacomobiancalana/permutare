// POSSIBILE MEMOIZATION ?? CREDO DI NO

/** Restituisce tutte le possibili permutazioni di un array. */
function perm(arr: string[], accum: string[][] = [[]]): string[][] {  // accum è un insieme di permutazioni
  if (arr.length === 0) {
    return accum;
  };
  
  let r: string = arr[0];  // prendo l'ultimo elemento di arr.
  let res: string[][] = [];  // array vuoto a cui aggiungere le nuove permutazioni

  for (let i = 0; i < accum.length; i++) {
    for (let j = 0; j < accum[i].length + 1; j++) {
      const tempInternalArray = [...accum[i]];
      tempInternalArray.splice(j, 0, r);
      res.push(tempInternalArray);
    }
  };

  return perm(arr.slice(1), res);
};

/** Restituisce tutte le possibili permutazioni di un array. */
function permLoop(arr: string[]): string[][] {  // accum è un insieme di permutazioni
  let accum: string[][] = [[]];
  
  for (const r of arr) {
    let res: string[][] = [];  // array vuoto a cui aggiungere le nuove permutazioni
    for (let i = 0; i < accum.length; i++) {
      for (let j = 0; j < accum[i].length + 1; j++) {
        const tempInternalArray = [...accum[i]];
        tempInternalArray.splice(j, 0, r);
        res.push(tempInternalArray);
      }
    };
    accum = res;
  }

  return accum;
};

const arrayDiProva = ['a', 'b', 'c', 'd', 'e']; // Massimo 10 elementi, sennò JS STACK TRACE

console.time('perm tail recursive');
const permTailRes = perm(arrayDiProva);
// console.log("perm tail recursive:\n",permTailRes);
console.timeEnd('perm tail recursive');

console.time('perm loop');
const permLoopRes = permLoop(arrayDiProva);
// console.log("per loop:\n", permLoopRes);
console.timeEnd('perm loop');

//TODO: funzione per controllare i risultati
// Questa sotto per controllare va bene perché ho costruito i due array con lo stesso ordine
console.log(JSON.stringify(permTailRes) === JSON.stringify(permLoopRes));
// Altrimenti, se avessi due array di array con un ordinamento diverso ma dovessero avere gli stessi elementi,
// dovrei scrivere una funzione che controlli tutti gli elementi del primo per vedere se esistano nel secondo
// (e semmai li toglierei dal secondo per metterli in un'altra variabile) e appena uno non ci sia sul secondo, darei errore.
// Se finita la lista di elementi del primo non avessi nessun errore, allora controllerei se sul secondo rimanga
// qualche elemento: se sì, allora darei errore. Altrimenti, vorrebbe dire che i due array di array sono uguali.


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
