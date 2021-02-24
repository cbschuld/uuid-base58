# uuid-base58

<p>
  <img alt="npm" src="https://img.shields.io/npm/dw/uuid-base58?style=flat-square">
  <img alt="NPM" src="https://img.shields.io/npm/l/uuid-base58?style=flat-square">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
</p>

Generate a RFC4122 compliant v4 UUID and return it encoded in base-58.  This is great for creating unique IDs which only consume 22 characters of storage.  Also provides base-58 encoding, decoding and validation.

## Installation

```sh
npm install uuid-base58
```

## Usage: creating a base58 UUID string

```typescript
import { uuid58 } from "uuid-base58";

const id = uuid58();
```

## Usage: validation of a base58 UUID string

```typescript
import { strict as assert } from 'assert';
import { uuid58, isValid } from "uuid-base58";

const id = uuid58();
assert(valid(id)); // true
```

## API

The uuid58 package provides three functions which can be imported

+ `uuid58` - creates the RFC4122 v4 UUID encoded in base-58
+ `encode(string)` - encodes a base-16 string in base-58
+ `decode(string)` - decodes a string from base-58 to base-16
+ `valid(string)` - returns true if the string is a valid base-58 string

## Notes on validation with valid(string)

The validation is optimistic such that if the encoding will decode into a valid UUID it will return true.  The validation will return false if the representative number overflows 128bits or if the base58 number is zero (0).  A UUID-based base58 value of `1` is a valid UUID of `00000000-0000-0000-0000-000000000000` and a base58 value of `2` is `00000000-0000-0000-0000-000000000001`.  These are valid base58 values that can become valid UUIDs.  The `valid()` function will also return false if a character in the base58 is not supported in the encoding hash alphabet which does not include `l` or `0` as an example.

## Testing

```sh
npm run test
```

## Performance Hit

There is an additional performance hit to translate a v4 UUID into base58.  In testing I found the overhead for the translation to base58 adds an additional 31%.  In 100k calculation batches I found that v4 uuid calculation took 1.606s/100k vs 2.319s/100k for uuid58.  Thus, 69% of the runtime was consumed calculating a v4 uuid.  Additional work could be done to bring the uuid calculation internal and attempt to increase performance.

![performance graph](https://raw.githubusercontent.com/cbschuld/uuid-base58/master/__tests__/performance.png)

## Base58 Alphabet

This solution uses the Bitcoin / IPFS hash alphabet: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz

[Additional information on Base-58](https://en.wikipedia.org/wiki/Base58).

## Contact

**Twitter** - @cbschuld

## Contributing

Yes, thank you!  Please update the docs and tests and add your name to the package.json file.
