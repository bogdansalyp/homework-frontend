'use strict';

 /**
 * Recursive function to insert value to the given object by the given path.
 * @param {object} target The object to modify.
 * @param {string} arr The path to the value to be changed.
 * @param {object} value The value to insert.
 * @returns {object} The modified object.
 */
const changeField = (target, arr, value) => {
    if (arr.length === 0) {
        return value;
    } else {
        const el = arr.shift();
        target[el] = (typeof target[el] === 'object') 
            ? changeField(target[el], arr, value) 
            : changeField({}, arr, value);
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
    return changeField(obj, arr, value);
}