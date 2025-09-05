// Isomorphic RNG: prefers Web Crypto, falls back to Node crypto
let nodeCrypto = null;
try {
  nodeCrypto = require('crypto');
} catch {
  nodeCrypto = null;
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;

function fillPool(target) {
  if (typeof globalThis !== 'undefined' && globalThis.crypto && typeof globalThis.crypto.getRandomValues === 'function') {
    globalThis.crypto.getRandomValues(target);
  } else if (nodeCrypto && typeof nodeCrypto.randomFillSync === 'function') {
    nodeCrypto.randomFillSync(target);
  } else {
    throw new Error('Secure random number generator not available.');
  }
}

export default function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    fillPool(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, (poolPtr += 16));
}
