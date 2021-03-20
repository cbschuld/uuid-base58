// SPECIAL THANKS TO THE UUID AUTHORITY - https://github.com/uuidjs/uuid
// 
// FILE: https://github.com/uuidjs/uuid/blob/master/src/v4.js
// NOTE: file modified to remove default export and input buffers

import rng from './rng.js';
import stringify from './stringify.js';

export function v4() {

  const rnds = rng();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  return stringify(rnds);
}