import { v4 as uuid } from '../src/uuid/v4';
import { uuidV4NoDash } from '../src/index';

describe('v4 testing', ()=> {
    test('calculation', () => {
        expect(uuid().length).toBeGreaterThan(20);
    });   
    test('simplistic unique check', () => {
        const uuid1 = uuid();
        const uuid2 = uuid();
        expect(uuid1).not.toBe(uuid2);
    });
})

describe('v4 testing without Dashes', ()=> {
    test('calculation', () => {
        expect(uuidV4NoDash().length).toBeGreaterThan(20);
    });   
    test('simplistic unique check', () => {
        const uuid1 = uuidV4NoDash();
        const uuid2 = uuidV4NoDash();
        expect(uuid1).not.toBe(uuid2);
    });
})
