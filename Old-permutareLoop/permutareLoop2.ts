// FUNZIONE DI PERMUTAZIONE CON LOOP, per limitare lo stack (ma è possibile perché è tail-recursive?)
function perm_loop(ar: string[]) {
  let x: string[] = [...ar];
  let acc: string[][] = [[]]; // OCCHIO!! è importante che sia [[]] e non solo [].
  // posso farlo funzionare con sono il [] ?? (non è così necessario)
  while (x.length != 0) { // doppio controllo? è ridondante? (su x.length e su r se è undefined)
    let r: (string | undefined) = x.pop();
    if (r) {
      let lenAccum: number = acc.length; // numero di permutazioni in accum al momento ( [[]].length è 1)
      let res: string[][] = []; // array vuoto a cui aggiungere le nuove permutazioni
      for (let i = 0; i < lenAccum; i++) {
        let cc: (string[] | undefined) = acc.shift();
        if (cc) {  //controllo se cc è undefined. devo farlo per forza ? e devo mettere un else? else cosa però?
          let ccLen = cc.length;
          let t_cc = [...cc];
          for (let j = 0; j < ccLen + 1; j++) {  // il + 1 è fondamentale
            t_cc.splice(j, 0, r);
            res.push(t_cc);
            t_cc = [...cc];
          }
        }
      }
      acc = JSON.parse(JSON.stringify(res));
    }
  }
  return acc;
};

console.log(perm_loop([]));
// console.log(perm_loop(['a', 'b', 'c']));
// perm_loop(['a', 'b', 'c'])

// FATTORIALE LOOP

function fact_loop(n: number) {
  let x: number = n;
  let accum: number = 1;

  while (x >= 0) {  //TODO: con for sennò, basta fare x+1 iterazioni

    if (x === 0) {
      return accum;
    };

    accum = accum * x;
    x = x - 1;
  }
}

// console.log(fact_loop(5));