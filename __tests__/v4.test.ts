import { v4 as uuid } from '../src/uuid/v4';

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
