import { uuid58 } from '../src/index';

// https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c

test('test intersection over 1000 ids', () => {
    let results = new Set();
    for(let i = 0 ; i < 1000; i++) {
        const id = uuid58();
        expect(results.has(id)).toBe(false);
        results.add(id);
    }
});

test('test intersection over 5000 ids', () => {
    let results = new Set();
    for(let i = 0 ; i < 5000; i++) {
        const id = uuid58();
        expect(results.has(id)).toBe(false);
        results.add(id);
    }
});

// limited for acceleration

// PASS  __tests__/intersection.test.ts (929.613 s)
// ✓ test intersection over 1000 ids (146 ms)
// ✓ test intersection over 5000 ids (758 ms)
// ✓ test intersection over 100,000 ids (15610 ms)
// ✓ test intersection over 1,000,000 ids (123612 ms)
// ✓ test intersection over 5,000,000 ids (787547 ms)

// test('test intersection over 100,000 ids', () => {
//     let results = new Set();
//     for(let i = 0 ; i < 100000; i++) {
//         const id = uuid58();
//         expect(results.has(id)).toBe(false);
//         results.add(id);
//     }
// });

// test('test intersection over 1,000,000 ids', () => {
//     let results = new Set();
//     for(let i = 0 ; i < 1000000; i++) {
//         const id = uuid58();
//         expect(results.has(id)).toBe(false);
//         results.add(id);
//     }
// });

// test('test intersection over 5,000,000 ids', () => {
//     let results = new Set();
//     for(let i = 0 ; i < 5000000; i++) {
//         const id = uuid58();
//         expect(results.has(id)).toBe(false);
//         results.add(id);
//     }
// });
