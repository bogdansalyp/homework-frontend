'use strict';

const deepIterator = (target, arr, value) => {
    if (arr.length === 0) {
        return value;
    } else {
        const el = arr.shift();
        target[el] = (typeof target[el] === 'object') 
            ? deepIterator(target[el], arr, value) 
            : deepIterator({}, arr, value);
    }
    return target;
  }

 /**
 * Modifies an object field. 
 * @param {object} obj The object to modify.
 * @param {string} key The path to the value to be changed.
 * @param {object} value The value to insert.
 * @returns {object} The modified object.
 */
const set = (obj, key, value) => {
    if (key === '' || typeof value === 'undefined') {
        return obj;
    }
    let arr = key.split('.');
    arr.shift();
    return deepIterator(obj, arr, value);
}