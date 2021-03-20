# uuid-base58

<p>
  <img alt="npm" src="https://img.shields.io/npm/dw/uuid-base58?style=flat-square">
  <img alt="NPM" src="https://img.shields.io/npm/l/uuid-base58?style=flat-square">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
</p>

Generate a RFC4122 compliant v4 UUID and return it encoded in base-58.  This is great for creating unique IDs which only consume 22 characters of storage (*some encodes are 21 characters*).  Also library also provides base-58 encoding, decoding and validation.

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

## Performance

### <= v1.1
There is finite performance cost to translate a v4 UUID into base58.  Testing the overhead for the translation to base58 exposes an additional 25% increase.  Three quarters of the runtime was consumed calculating the v4 uuid.  Additional work could be done to bring the uuid calculation internal and attempt to increase performance.

![performance graph](https://raw.githubusercontent.com/cbschuld/uuid-base58/master/__tests__/performance.png)

### Performance Update (>=v1.2.0)

In version =>1.2 additional performance work was completed by removing the validation process from the v4 UUID calculation and the runtime from the amazing [uuid](https://github.com/uuidjs/uuid) project was lifted and placed into `src/uuid` of this project.  The package reduction was significant: 340kB to 5kB (18kB unpacked).  Unfortunately little to no substantial performance increase although it was noticed v1.2 did consistently score better in realtime results but user+system remained nearly the same over 4M test generations.  Additionally, the UUID string management process was updated to not create a traditional dashed uuid and the `uuid` v4 validation process was removed (*which addresses specific user input and does not intersect v4 calculation*).  Performance increases are likely at a point of diminishing returns.

![performance graph](https://user-images.githubusercontent.com/231867/111826829-65468080-88a6-11eb-86ad-3f254c017a89.png)

## Package Size

For version >= 1.2.X the official dependency on the [uuid](https://github.com/uuidjs/uuid) project was removed.  The solution and dependency are still in use but only the portion required for a v4 UUID was marshalled over.  The runtime was altered slightly and added to the `src/uuid` path.  Current sizing is around 5kB (18kB unpacked), down from 340kB.

## Base58 Alphabet

This solution uses the Bitcoin / IPFS hash alphabet:
```
123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
```

[Additional information on Base-58](https://en.wikipedia.org/wiki/Base58).

## Contact

**Twitter** - @cbschuld

## Contributing

Yes, thank you!  Please update the docs and tests and add your name to the package.json file.
