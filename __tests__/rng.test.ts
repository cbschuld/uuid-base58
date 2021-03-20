import rng from '../src/uuid/rng.js';

test('rng calculation', () => {
    expect(rng().length).toBe(16);
});
