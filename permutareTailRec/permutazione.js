"use strict";
// FUNZIONE PERMUTAZIONE
function permutazione(array) {
    function perm(arr, accum) {
        if (arr.length === 0) {
            return accum;
        }
        ;
        let r = arr[arr.length - 1]; // prendo l'ultimo elemento di arr.
        let lenAccum = accum.length;
        console.log(lenAccum); // numero di permutazioni in accum al momento
        let res = []; // array vuoto a cui aggiungere le nuove permutazioni
        for (let i = 0; i < lenAccum; i++) {
            console.log(lenAccum);
            let cc = accum.shift();
            if (cc) { // controllo se cc è undefined
                let ccLen = cc.length;
                let t_cc = [...cc];
                for (let j = 0; j < ccLen + 1; j++) {
                    t_cc.splice(j, 0, r);
                    res.push(t_cc);
                    t_cc = [...cc];
                }
            }
            else
                res.push([r]); // vale per la prima volta
        }
        return perm(arr.slice(0, -1), res);
    }
    ;
    return perm(array, [[]]); // credo che serve [[]], poichè [] non basta.
}
console.log(permutazione(['a', 'b', 'c']));
// PERMUTAZIONE CON UN'UNICA LETTERA E UN INSIEME DI PERMUTAZIONI
function permLettera(lettera, acc) {
    let t_res = [];
    let lenArray = acc.length;
    for (let i = 0; i < lenArray; i++) {
        let t_acc = [...acc[i]];
        for (let j = 0; j < acc[i].length + 1; j++) {
            t_acc.splice(j, 0, lettera);
            t_res.push(t_acc);
            t_acc = [...acc[i]];
        }
    }
    return t_res;
}
;
