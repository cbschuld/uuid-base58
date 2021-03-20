import { v4 as uuid } from '../src/uuid/v4';

test('v4 calculation', () => {
    expect(uuid().length).toBeGreaterThan(20);
});
