"use strict";
function identity(arg) {
    return arg;
}
function reverseArray(arr) {
    return arr.reverse();
}
function mapObject(obj, mapFn) {
    const mappedObj = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            mappedObj[key] = mapFn(obj[key]);
        }
    }
    return mappedObj;
}
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
console.log(identity(1));
console.log(identity("hello"));
console.log(reverseArray([1, 2, 3, 4]));
console.log(mapObject({ a: 1, b: 2 }, x => x.toString()));
console.log(filterArray([1, 2, 3, 4], x => x % 2 === 0));
//# sourceMappingURL=index.js.map