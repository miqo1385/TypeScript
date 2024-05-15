
function identity<T>(arg: T): T {
    return arg;
}


function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}


function mapObject<K extends keyof any, V, U>(
    obj: Record<K, V>, 
    mapFn: (value: V) => U
): Record<K, U> {
    const mappedObj: Partial<Record<K, U>> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            mappedObj[key] = mapFn(obj[key]);
        }
    }
    return mappedObj as Record<K, U>;
}



function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
    return arr.filter(predicate);
}

console.log(identity<number>(1)); 
console.log(identity<string>("hello")); 

console.log(reverseArray<number>([1, 2, 3, 4])); 

console.log(mapObject({ a: 1, b: 2 }, x => x.toString())); 

console.log(filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)); 
