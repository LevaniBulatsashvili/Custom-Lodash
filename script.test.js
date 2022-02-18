const Lodash = require('./script');

const _ = new Lodash()

test('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const size = 2;
    const result = [['a', 'b'], ['c', 'd']];
    expect(_.chunk(arr, size)).toEqual(result);
});

test('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const size = 3;
    const result = [['a', 'b', 'c'], ['d']];
    expect(_.chunk(arr, size)).toEqual(result);
});

test('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const size = 4;
    const result = [['a', 'b', 'c', 'd']];
    expect(_.chunk(arr, size)).toEqual(result);
});

test('Creates an array of elements split into groups the length of size', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const size = 1;
    const result = [['a'], ['b'], ['c'], ['d']];
    expect(_.chunk(arr, size)).toEqual(result);
});



test('Creates an array with all falsey values removed', () => {
    const arr = [0, 1, false, 2, '', 3];
    const result = [1, 2, 3];
    expect(_.compact(arr)).toEqual(result);
});

test('Creates an array with all falsey values removed', () => {
    const arr = [0, 1, false, 5, '', null];
    const result = [1, 5];
    expect(_.compact(arr)).toEqual(result);
});

test('Creates an array with all falsey values removed', () => {
    const arr = [false, 2, undefined, '', null];
    const result = [2];
    expect(_.compact(arr)).toEqual(result);
});

test('Creates an array with all falsey values removed', () => {
    const arr = [5, 2, 7, '', null, 1];
    const result = [5, 2, 7, 1];
    expect(_.compact(arr)).toEqual(result);
});



test('Creates a slice of array with n elements dropped from the beginning', () => {
    const arr = [1, 2, 3];
    const result = [2, 3];
    expect(_.drop(arr)).toEqual(result);
});

test('Creates a slice of array with n elements dropped from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 2;
    const result = [3];
    expect(_.drop(arr, number)).toEqual(result);
});

test('Creates a slice of array with n elements dropped from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 5;
    const result = [];
    expect(_.drop(arr, number)).toEqual(result);
});

test('Creates a slice of array with n elements dropped from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 0;
    const result = [1, 2, 3];
    expect(_.drop(arr, number)).toEqual(result);
});



test('Creates a slice of array excluding elements dropped from the beginning', () => {
    const arr = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
    const fn = function(o) { return !o.active; };
    const result = [{user: "pebbles", active: true}];
    expect(_.dropWhile(arr, fn)).toEqual(result);
});

test('Creates a slice of array excluding elements dropped from the beginning', () => {
    const arr = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
    const obj = { 'user': 'barney', 'active': false };
    const result = [{user: "fred", active: false}, {user: "pebbles", active: true}];
    expect(_.dropWhile(arr, obj)).toEqual(result);
});

test('Creates a slice of array excluding elements dropped from the beginning', () => {
    const arr = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
    const value = ['active', false];
    const result = [{ 'user': 'pebbles', 'active': true }];
    expect(_.dropWhile(arr, value)).toEqual(result);
});

test('Creates a slice of array excluding elements dropped from the beginning', () => {
    const arr = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
      ];
    const str = 'active';
    const result = arr;
    expect(_.dropWhile(arr, str)).toEqual(result);
});



test('Creates a slice of array with n elements taken from the beginning', () => {
    const arr = [1, 2, 3];
    const result = [1];
    expect(_.take(arr)).toEqual(result);
});

test('Creates a slice of array with n elements taken from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 2;
    const result = [1, 2];
    expect(_.take(arr, number)).toEqual(result);
});

test('Creates a slice of array with n elements taken from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 5;
    const result = [1, 2, 3];
    expect(_.take(arr, number)).toEqual(result);
});

test('Creates a slice of array with n elements taken from the beginning', () => {
    const arr = [1, 2, 3];
    const number = 0;
    const result = [];
    expect(_.take(arr, number)).toEqual(result);
});




test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
    const fn = function(o) { return !o.active; };
    const result = [{ 'user': 'fred',   'age': 40, 'active': false }];
    expect(_.filter(arr, fn)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
    const obj = { 'age': 36, 'active': true };
    const result = [{user: "barney", age: 36, active: true}];
    expect(_.filter(arr, obj)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
    const value = ['active', false];
    const result = [{ 'user': 'fred',   'age': 40, 'active': false }];
    expect(_.filter(arr, value)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
    const str = 'active';
    const result = [{user: "barney", age: 36, active: true}];
    expect(_.filter(arr, str)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const obj = { 'user': 'barney', 'age': 36, 'active': true };
    const fn = function(o) { return !o.active; };
    const result = [{ 'user': 'barney', 'age': 36, 'active': true }];
    expect(_.filter(obj, fn)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const obj = { 'user': 'barney', 'age': 36, 'active': true };
    const value = { 'age': 36, 'active': true };
    const result = [{user: "barney", age: 36, active: true}];
    expect(_.filter(obj, value)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const obj = { 'user': 'barney', 'age': 36, 'active': true };
    const arr = ['active', false];
    const result = [];
    expect(_.filter(obj, arr)).toEqual(result);
});

test('Iterates over elements of collection, returning an array of all elements predicate returns truthy for', () => {
    const obj = { 'user': 'barney', 'age': 36, 'active': true };
    const str = 'active';
    const result = [{user: "barney", age: 36, active: true}];
    expect(_.filter(obj, str)).toEqual(result);
});



test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
    const fn = function(o) { return o.age < 40; };
    const result = { 'user': 'barney',  'age': 36, 'active': true };
    expect(_.find(arr, fn)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
    const obj = { 'age': 1, 'active': true };
    const result = {user: "pebbles", age: 1, active: true};
    expect(_.find(arr, obj)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
    const value = ['active', false];
    const result = { 'user': 'fred',    'age': 40, 'active': false };
    expect(_.find(arr, value)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const arr = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];
    const str = 'active';
    const result = { 'user': 'barney',  'age': 36, 'active': true };
    expect(_.find(arr, str)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const obj = { 'user': 'barney',  'age': 36, 'active': true };
    const fn = function(o) { return o.age < 40; };
    const result = { 'user': 'barney',  'age': 36, 'active': true };
    expect(_.find(obj, fn)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const obj = { 'user': 'barney',  'age': 36, 'active': true };
    const value = { 'age': 1, 'active': true };
    const result = {};
    expect(_.find(obj, value)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const obj = { 'user': 'barney',  'age': 36, 'active': true };
    const arr = ['active', false];
    const result = {};
    expect(_.find(obj, arr)).toEqual(result);
});

test('Iterates over elements of collection, returning the first element predicate returns truthy for', () => {
    const obj = { 'user': 'barney',  'age': 36, 'active': true };
    const str = 'active';
    const result = { 'user': 'barney',  'age': 36, 'active': true };
    expect(_.find(obj, str)).toEqual(result);
});



test('Checks if value is in collection', () => {
    const arr = [1, 2, 3];
    const value = 1;
    const result = true;
    expect(_.includes(arr, value)).toEqual(result);
});

test('Checks if value is in collection', () => {
    const arr = [1, 2, 3];
    const value = 1;
    const fromIndex = 2;
    const result = false;
    expect(_.includes(arr, value, fromIndex)).toEqual(result);
});

test('Checks if value is in collection', () => {
    const obj = { 'a': 1, 'b': 2 };
    const value = 1;
    const result = true;
    expect(_.includes(obj, value)).toEqual(result);
});

test('Checks if value is in collection', () => {
    const str = 'abcd';
    const value = 'bc';
    const result = true;
    expect(_.includes(str, value)).toEqual(result);
});



test('Creates an array of values by running each element in collection thru iteratee.', () => {
    const arr = [4, 8];
    const fn = function square(n) {
        return n * n;
      };
    const result = [16, 64];
    expect(_.map(arr, fn)).toEqual(result);
});

test('Creates an array of values by running each element in collection thru iteratee.', () => {
    const obj = { 'a': 8, 'b': 6 };
    const fn = function square(n) {
        return n * n;
      };
    const result = [64, 36];
    expect(_.map(obj, fn)).toEqual(result);
});

test('Creates an array of values by running each element in collection thru iteratee.', () => {
    const obj = { 'a': 4, 'b': 8 };
    const fn = function square(n) {
        return n * n;
      };
    const result = [16, 64];
    expect(_.map(obj, fn)).toEqual(result);
});

test('Creates an array of values by running each element in collection thru iteratee.', () => {
    const users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
    ];
    const value = 'user';
    const result = ["barney", "fred"];
    expect(_.map(users, value)).toEqual(result);
});




test('Creates an array of grouped elements', () => {
    const arr = ['a', 'b'];
    const arr2 = [1, 2];
    const arr3 = [true, false];
    const result = [['a', 1, true], ['b', 2, false]];
    expect(_.zip(arr, arr2, arr3)).toEqual(result);
});

test('Creates an array of grouped elements', () => {
    const arr = ['b'];
    const arr2 = [2];
    const arr3 = [false];
    const result = [['b', 2, false]];
    expect(_.zip(arr, arr2, arr3)).toEqual(result);
});

test('Creates an array of grouped elements', () => {
    const arr = ['c', 'b'];
    const arr2 = [5, 3];
    const arr3 = [undefined, false];
    const result = [['c', 5, undefined], ['b', 3, false]];
    expect(_.zip(arr, arr2, arr3)).toEqual(result);
});

test('Creates an array of grouped elements', () => {
    const arr = ['a', 'b', 'c'];
    const arr2 = [1, 2, 4];
    const arr3 = [true, false, undefined];
    const result = [['a', 1, true], ['b', 2, false], ['c', 4, undefined]];
    expect(_.zip(arr, arr2, arr3)).toEqual(result);
});


// objects

test('Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object', () => {
    const object = {
        'a': [{ 'b': 2 }, { 'd': 4 }]
      };
    const other = {
        'a': [{ 'c': 3 }, { 'e': 5 }]
      };;
    const result = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] };
    expect(_.merge(object, other)).toEqual(result);
});

test('Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object', () => {
    const object = {
        'a': [{ 'b': 2 }, { 'd': 4 }]
      };
    const other = {
        'a': [{ 'b': 3 }, { 'd': undefined }]
      };;
    const result = { 'a': [{ 'b': 3}, { 'd': 4}] };
    expect(_.merge(object, other)).toEqual(result);
});

test('Recursively merges own and inherited enumerable string keyed properties of source objects into the destination object', () => {
    const object = {
        'a': [{ 'b': 2 }, { 'd': 4 }]
      };
    const other = {
        'a': [{ 'b': 3 , 'e': 5 }, { 'd': undefined }]
      };;
    const result = { 'a': [{ 'b': 3, 'e': 5 }, { 'd': 4 }] };
    expect(_.merge(object, other)).toEqual(result);
});




test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = ['a', 'c'];
    const result = { 'b': '2' };
    expect(_.omit(object, arr)).toEqual(result);
});

test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = ['c'];
    const result = { 'a': 1, 'b': '2' };
    expect(_.omit(object, arr)).toEqual(result);
});

test('Creates an object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = 'a';
    const result = { 'b': '2', 'c': 3 };
    expect(_.omit(object, arr)).toEqual(result);
});



test('Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn\'t return truthy for', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const isNumber = function (value) {
        if (typeof(value) === 'number') {
        return true;
        }
    }
    const result = { 'b': '2' };
    expect(_.omitBy(object, isNumber)).toEqual(result);
});

test('Creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn\'t return truthy for', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const isString = function (value) {
        if (typeof(value) === 'string') {
        return true;
        }
    }
    const result = { 'a': 1, 'c': 3 };
    expect(_.omitBy(object, isString)).toEqual(result);
});




test('Creates an object composed of the picked object properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = ['a', 'c'];
    const result = { 'a': 1, 'c': 3 };
    expect(_.pick(object, arr)).toEqual(result);
});

test('Creates an object composed of the picked object properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = ['c'];
    const result = { 'c': 3 };
    expect(_.pick(object, arr)).toEqual(result);
});

test('Creates an object composed of the picked object properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const arr = 'b';
    const result = { 'b': '2' };
    expect(_.pick(object, arr)).toEqual(result);
});



test('Creates an object composed of the object properties predicate returns truthy for', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const isNumber = function (value) {
        if (typeof(value) === 'number') {
        return true;
        }
    }
    const result = { 'a': 1, 'c': 3 };
    expect(_.pickBy(object, isNumber)).toEqual(result);
});

test('Creates an object composed of the object properties predicate returns truthy for', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const isString = function (value) {
        if (typeof(value) === 'string') {
        return true;
        }
    }
    const result = { 'b': '2' };
    expect(_.pickBy(object, isString)).toEqual(result);
});



test('Creates an array of own enumerable string keyed-value pairs for object', () => {
    const foo = function () {
        this.a = 1;
        this.b = 2;
    }
    foo.prototype.c = 3;
    const result = [['a', 1], ['b', 2]];
    expect(_.toPairs(new foo)).toEqual(result);
});

test('Creates an array of own enumerable string keyed-value pairs for object', () => {
    const foo = function () {
        this.a = 10;
        this.c = false;
        this.d = true;
    }
    const result = [['a', 10], ['c', false], ['d', true]];
    expect(_.toPairs(new foo)).toEqual(result);
});
