"use strict";
// FUNZIONE DI PERMUTAZIONE CON LOOP, per limitare lo stack.
function perm_loop(ar) {
    let x = [...ar];
    let acc = [[]]; // OCCHIO!! è importante che sia [[]] e non solo [].
    // posso farlo funzionare con sono il [] ??
    while (x.length != 0) { // doppio controllo? è ridondante? (su x.length e su r se è undefined)
        let r = x.pop();
        if (r) {
            let lenAccum = acc.length; // numero di permutazioni in accum al momento ( [[]].length è 1)
            let res = []; // array vuoto a cui aggiungere le nuove permutazioni
            for (let i = 0; i < lenAccum; i++) {
                let cc = acc.shift();
                if (cc) { //controllo se cc è undefined. devo farlo per forza ? e devo mettere un else? else cosa però?
                    let ccLen = cc.length;
                    let t_cc = [...cc];
                    for (let j = 0; j < ccLen + 1; j++) { // il + 1 è fondamentale
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
}
;
console.log(perm_loop([]));
// console.log(perm_loop(['a', 'b', 'c']));
// perm_loop(['a', 'b', 'c'])
// FATTORIALE LOOP
function fact_loop(n) {
    let x = n;
    let accum = 1;
    while (true) {
        if (x === 0) {
            return accum;
        }
        else {
            accum = accum * x;
            x = x - 1;
        }
    }
}
// console.log(fact_loop(5));
