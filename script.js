class Lodash {
    arrLength(array) {
        let length = 0;
        for (const item of array) {
            length += 1;
        }
        return length;
    }

    arrPush(array, element) {
        let pushed = array;
        pushed[this.arrLength(array)] = element;
        return pushed;
    }

    chunk(array, size = 1) {
        let chunked = [];
        let chunkOfArray = [];
        for (let i = 0; i < this.arrLength(array); i += 1) {
            this.arrPush(chunkOfArray, array[i]);
            if (this.arrLength(chunkOfArray) === size) {
                this.arrPush(chunked, chunkOfArray);
                chunkOfArray = [];
            }
        }
        if (this.arrLength(chunkOfArray)) {
            this.arrPush(chunked, chunkOfArray);
        }
        return chunked;
    }

    compact(array) {
        let compactArr = []
        for (let i = 0; i < this.arrLength(array); i += 1) {
            if (array[i]) {
                this.arrPush(compactArr, array[i]);
            }
        }
        return compactArr;
    }

    drop(array, toDrop = 1) {
        let dropped = [];
        for (let i = 0; i < this.arrLength(array); i += 1) {
            if (i >= toDrop) {
                this.arrPush(dropped, array[i]);
            }
        }
        return dropped;
    }

    dropWhile(array, fn) {
        return 'not implemented';
    }

    take(array, toTake = 1) {
        let taken = [];
        for (let i = 0; i < this.arrLength(array); i += 1) {
            if (i < toTake) {
                this.arrPush(taken, array[i])
            }
        }
        return taken;
    }

    filter(collection, fn) {
        const filtered = [];
        if (collection instanceof Array) {
            for (const item of collection) {
                if (typeof(fn) === 'string') {
                    if (item[fn]) {
                       this.arrPush(filtered, item);
                    }
                } else if (fn instanceof Array) {
                    if (item[fn[0]] === fn[1]) {
                        this.arrPush(filtered, item);
                    }
                }  else if (fn instanceof Object) {
                    const keys = [];
                    for (const key in fn) {
                        this.arrPush(keys, key);
                    }
                    if (item[keys[0]] === fn[keys[0]] && item[keys[1]] === fn[keys[1]]) {
                        this.arrPush(filtered, item);
                    }
                }  else {
                    if (fn(item)) {
                        this.arrPush(filtered, item);
                    }
                }
            }
        } else {
            if (typeof(fn) === 'string') {
                if (collection[fn]) {
                    this.arrPush(filtered, collection);
                }
            } else if (fn instanceof Array) {
                if (collection[fn[0]] === fn[1]) {
                    this.arrPush(filtered, collection);
                }
            }  else if (fn instanceof Object) {
                const keys = [];
                for (const key in fn) {
                    this.arrPush(keys, key);
                }
                if (collection[keys[0]] === fn[keys[0]] && collection[keys[1]] === fn[keys[1]]) {
                        this.arrPush(filtered, collection);
                }
            }  else {
                if (fn(collection)) {
                    this.arrPush(filtered, collection);
                }
            }
        }
        return filtered;
    }

    find(collection, fn, fromIndex = 0) {
        if (collection instanceof Array) {
            for (const item of collection) {
                if (typeof(fn) === 'string') {
                    if (item[fn]) {
                        return item;
                    }
                } else if (fn instanceof Array) {
                    if (item[fn[0]] === fn[1]) {
                        return item;
                    }
                }  else if (fn instanceof Object) {
                    const keys = [];
                    for (const key in fn) {
                        this.arrPush(keys, key);
                    }
                    if (item[keys[0]] === fn[keys[0]] && item[keys[1]] === fn[keys[1]]) {
                        return item;
                    }
                }  else {
                    if (fn(item)) {
                        return item;
                    }
                }
            }
        } else {
            for (const key in collection) {
                if (typeof(fn) === 'string') {
                    if (collection[fn]) {
                        return collection;
                    }
                } else if (fn instanceof Array) {
                    if (collection[fn[0]] === fn[1]) {
                        return collection;
                    }
                }  else if (fn instanceof Object) {
                    const keys = [];
                    for (const key in fn) {
                        this.arrPush(keys, key);
                    }
                    if (collection[keys[0]] === fn[keys[0]] && collection[keys[1]] === fn[keys[1]]) {
                        return collection;
                    }
                }  else {
                    if (fn(collection)) {
                        return collection;
                    }
                }
            }
        }
        return {};
    }

    includes(collection, value, index = 0) {
        if (collection instanceof Object && !(collection instanceof Array)) {
            let keyIndex = 0;
            for (const key in collection) {
                keyIndex += 1;
                if (keyIndex > index) {
                    if (collection[key] === value) {
                        return true;
                    }
                }
            }
            return false;
        } else {
            if (typeof(collection) === 'string') {
                return collection.slice(index).includes(value);
            }
            for (let i = 0; i < this.arrLength(collection); i += 1) {
                if (collection[i] === value && i >= index) {
                    return true;
                }
            }
            return false;
        }
    }

    map(collection, fn) {
        const mapped = [];
        if (collection instanceof Array) {
            for (const item of collection) {
                if (typeof (fn) === 'string') {
                    this.arrPush(mapped, item[fn]);
                } else {
                    this.arrPush(mapped, fn(item));
                }
            }
        } else {
            if (typeof(fn) === 'string') {
                this.arrPush(mapped, fn(collection[fn]));
            } else {
                for (const key in collection) {
                    this.arrPush(mapped, fn(collection[key]));
                }
            }
        }
        return mapped;
    }

    zip(...array) {
        let zipped = []
        for (let iter = 0; iter < this.arrLength(array[0]); iter += 1) {
            let zippedElements = [];
            for(let i = 0; i < this.arrLength(arguments); i += 1) {
                this.arrPush(zippedElements, array[i][iter]);
            }
            this.arrPush(zipped, zippedElements);
        }
        return zipped;
    }

    merge(object, ...other) {
        for (let index = 0; index < this.arrLength(other); index += 1) {
            const currentObject = other[index];
            for (const key in currentObject) {
                if (object[key]) {
                    for (let i = 0; i < this.arrLength(currentObject[key]); i += 1) {
                        if (object[key][i]) {
                            for (const keyOfOther in currentObject[key][i]) {
                                if (currentObject[key][i][keyOfOther] === undefined && object[key][i][keyOfOther]) {
                                    break;
                                }
                                object[key][i][keyOfOther] = currentObject[key][i][keyOfOther];
                            }
                        } else {
                            object[key][i] = currentObject[key][i];
                        }
                    }
                } else {
                    object[key] = currentObject[key];
                }
            }
        }
        return object;
    }

    omit(object, ...arrays) {
        const omitted = {};
        const fullArray = [];
        for (let i = 0; i < this.arrLength(arrays); i += 1) {
            if (typeof(arrays[i]) === 'string') {
                this.arrPush(fullArray, arrays[i]);
            } else {
                for (let index = 0; index < this.arrLength(arrays[i]); index += 1) {
                    this.arrPush(fullArray, arrays[i][index]);
                }
            }
        }
        for (const key in object) {
            for (let i = 0; i < this.arrLength(fullArray); i += 1) {
                if (key === fullArray[i]) {
                    break;
                } else if (i === this.arrLength(fullArray) - 1) {
                    omitted[key] = object[key];
                }
            }
        }
        return omitted;
    }

    omitBy(object, fn) {
        const omittedBy = {};
        for (const key in object) {
            if (!fn(object[key])) {
                omittedBy[key] = object[key];
            }
        }
        return omittedBy;
    }

    pick(object, ...arrays) {
        let picked = {};
        const fullArray = []
        for (let i = 0; i < this.arrLength(arrays); i += 1) {
            if (typeof(arrays[i]) === 'string') {
                this.arrPush(fullArray, arrays[i]);
            } else {
                for (let index = 0; index < this.arrLength(arrays[i]); index += 1) {
                    this.arrPush(fullArray, arrays[i][index]);
                }
            }
        }
        for (const key in object) {
            for (let i = 0; i < this.arrLength(fullArray); i += 1) {
                if (key === fullArray[i]) {
                    picked[key] = object[key];
                    break;
                }
            }
        }
        return picked;
    }

    pickBy(object, fn) {
        let pickedBy = {};
        for (const key in object) {
            if (fn(object[key])) {
                pickedBy[key] = object[key];
            }
        }
        return pickedBy;
    }

    toPairs(object) {
        let toPaired = []
        for (const item in object) {
            if (!(item in object.__proto__)) {
                const array = [];
                this.arrPush(array, item);
                this.arrPush(array, object[item]);
                this.arrPush(toPaired, array);
            }
        }
        return toPaired;
    }
}

module.exports = Lodash;
