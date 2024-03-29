import { uuid58, encode, decode, valid } from '../src/index';

test('test the encoder', () => {
    const id = uuid58();
    expect(id.length).toBeGreaterThanOrEqual(21);
});

test('test the encoder (1) - accuracy', () => {
    const b58 = "WikrejGwJvP7GE5tKXHo7Y";
    const b16 = "f0ad8aff-32bc-490d-b1af-4dbd04e1e153";
    expect(encode(b16)).toBe(b58);
});

test('test the encoder (2) - accuracy', () => {
    const b58 = "T3hkUpKsAkMBiUQygbgDAh";
    const b16 = "d2ee349f-bffc-4e90-8a4e-d11086876ffa";
    expect(encode(b16)).toBe(b58);
});

test('test the encoder (3) - accuracy', () => {
    const b58 = "XFmQuGhecfwDoBwykU1EC";
    const b16 = "043969ad-6071-4340-a526-1123c717ea65";
    expect(encode(b16)).toBe(b58);
});

test('test the encoder (4) - accuracy', () => {
    const b58 = "BkhvK4MZSyraVMr4NYM8VQadHwxo2dZJWWL6B7Zs1KyDWKatbkyVz6Rsgm9F9ybuWsmGK6W5H4VhbhbM32daNoPFLdRaLo";
    const b16 = "129f5a5c1545dc3a1db567154121878f08f8572cdf45e5549c624fb3f01fbd274690716e09edf5658cb0c2be87e067149ff6ccdbe6a909eeb65db22a8e6d2eb5ce3f8c3d80";
    expect(encode(b16)).toBe(b58);
});

test('test the encoder - incorrect data', () => {
    const b58 = "XFmQuGhecfwDoBwykU1EC";
    const b16 = "\t043969ad-6071-4340-a526-1123c717ea65";
    expect(encode(b16)).toBe(b58);
});

test('test the decoder (1) - accuracy', () => {
    const b58 = "WikrejGwJvP7GE5tKXHo7Y";
    const b16 = "f0ad8aff-32bc-490d-b1af-4dbd04e1e153";
    expect(decode(b58)).toBe(b16);
});

test('test the decoder (2) - accuracy', () => {
    const b58 = "T3hkUpKsAkMBiUQygbgDAh";
    const b16 = "d2ee349f-bffc-4e90-8a4e-d11086876ffa";
    expect(decode(b58)).toBe(b16);
});

test('test the decoder (3) - accuracy', () => {
    const b58 = "XFmQuGhecfwDoBwykU1EC";
    const b16 = "043969ad-6071-4340-a526-1123c717ea65";
    expect(decode(b58)).toBe(b16);
});

test('test the decoder', () => {
    const id = 'cd94c8a0-0bf9-4115-a807-408f64bbf1de';
    const e = encode(id);
    expect(decode(e)).toBe(id);
});

test('test the validator (1)', () => {
    const b58 = "WikrejGwJvP7GE5tKXHo7Y";
    expect(valid(b58)).toBe(true);
});

test('test the validator (2)', () => {
    const b58 = "T3hkUpKsAkMBiUQygbgDAh";
    expect(valid(b58)).toBe(true);
});

test('test the validator (3)', () => {
    const b58 = "XFmQuGhecfwDoBwykU1EC";
    expect(valid(b58)).toBe(true);
});

test('test the validator (4)', () => {
    const b58 = "BkhvK4MZSyraVMr4NYM8VQadHwxo2dZJWWL6B7Zs1KyDWKatbkyVz6Rsgm9F9ybuWsmGK6W5H4VhbhbM32daNoPFLdRaLo";
    expect(valid(b58)).toBe(false); // this is not a stored UUID, should fail
});

test('test the validator (>128bit) (1)', () => {
    const b58 = "ZWikrejGwJvP7GE5tKXHo7Y"; // this number is larger than 128bit, will fail
    expect(valid(b58)).toBe(false);
});

test('test the validator (>128bit) (2)', () => {
    const b58 = "T3hkUpKsAkMBiUQygbgDAh2"; // this number is larger than 128bit, will fail
    expect(valid(b58)).toBe(false);
});

test('test the validator (error state) (1)', () => {
    const b58 = "l3hkUpKsAkMBiUQygbgDAh2"; // this number is larger than 128bit, will fail
    expect(valid(b58)).toBe(false);
});

test('test the validator (zero)', () => {
    const b58 = "0"; // this number is larger than 128bit, will fail
    expect(valid(b58)).toBe(false);
});

test('test the validator (bad input)', () => {
    expect(valid("0-1")).toBe(false);
    expect(valid("dutq34ut98adsgf0-as8dyfpq34knqwetheW.23.23..23E89FHA98SDY9Y234H5")).toBe(false);
    expect(valid("  ")).toBe(false);
    expect(valid("")).toBe(false);
    expect(valid("-----")).toBe(false);
    expect(valid("43975098234765702347560892734095872983758907238975982739857298375982375987238975203875")).toBe(false);
    expect(valid(".........")).toBe(false);
    expect(valid(".")).toBe(false);
});