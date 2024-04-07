/** Restituisce tutte le possibili permutazioni di un array. */
function permutazioni(array) {
    function perm(arr, accum = [[]]) {
        if (arr.length === 0) {
            return accum;
        }
        ;
        let r = arr[arr.length - 1]; // prendo l'ultimo elemento di arr.
        let res = []; // array vuoto a cui aggiungere le nuove permutazioni
        for (let i = 0; i < accum.length; i++) {
            for (let j = 0; j < accum[i].length + 1; j++) {
                const tempInternalArray = [...accum[i]];
                tempInternalArray.splice(j, 0, r);
                res.push(tempInternalArray);
            }
        }
        ;
        return perm(arr.slice(0, -1), res);
    }
    ;
    return perm(array);
}
console.log(permutazioni(['a', 'b', 'c', 'd']));
/**
 * Permutazione con un'unica lettera e un insieme di permutazioni
 * esempio: permLettera('a', [[b,c], [w,z]]) ritorna ->
 * -> [["a", "b", "c"], ["b", "a", "c"], ["b", "c", "a"], ["a", "w", "z"], ["w", "a", "z"], ["w", "z", "a"]]
 * */
function permLettera(lettera, acc) {
    let t_res = [];
    for (let i = 0; i < acc.length; i++) {
        for (let j = 0; j < acc[i].length + 1; j++) {
            const arrayToModify = [...acc[i]];
            arrayToModify.splice(j, 0, lettera);
            t_res.push(arrayToModify);
        }
    }
    return t_res;
}
;
