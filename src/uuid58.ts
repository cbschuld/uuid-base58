const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export const encode = (uuid: string): string => {
  let b = BigInt('0x' + uuid.replace(/[^a-f0-9]/gi, ''));
  let u58 = '';
  do {
    const index = parseInt((b % BigInt(BASE58_ALPHABET.length)).toString(), 10);
    u58 = BASE58_ALPHABET[index] + u58;
    b = b / BigInt(BASE58_ALPHABET.length);
  } while (b > 0);
  return u58;
};

export const decode = (uuidBase58: string): string => {
  const parts = Array.from(uuidBase58).map((x: string) => BASE58_ALPHABET.indexOf(x));
  if (parts.some((inc) => inc < 0) || uuidBase58.trim() === '') {
    return uuidBase58;
  }
  const max = uuidBase58.length - 1;
  const b = parts.reduce(
    (total, val, index) => (total + BigInt(val)) * (index < max ? BigInt(BASE58_ALPHABET.length) : BigInt(1)),
    BigInt(0),
  );
  const hex = b.toString(16).padStart(32, '0');
  return [0, 8, 12, 16, 20].map((p, i, a) => hex.substring(p, a[i + 1])).join('-');
};

export const valid = (uuidBase58: string): boolean => {
  return decode(uuidBase58).length === 36;
}