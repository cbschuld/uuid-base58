import { uuid58, encode, decode } from '../src/index';
import { v4 as uuid } from 'uuid';

test('test uuid creation', () => {
    expect(typeof uuid()).toBe('string');
});

test('test the encoder', () => {
    expect(typeof uuid58()).toBe('string');
});

test('test the encoder - accuracy', () => {
    const b58 = "WikrejGwJvP7GE5tKXHo7Y";
    const b16 = "f0ad8aff-32bc-490d-b1af-4dbd04e1e153";
    expect(encode(b16)).toBe(b58);
});

test('test the decoder - accuracy', () => {
    const b58 = "WikrejGwJvP7GE5tKXHo7Y";
    const b16 = "f0ad8aff-32bc-490d-b1af-4dbd04e1e153";
    expect(decode(b58)).toBe(b16);
});

test('test the decoder', () => {
    const id = uuid();
    const e = encode(id);
    expect(decode(e)).toBe(id);
});