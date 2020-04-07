# uuid-base58

Generate a RFC4122 compliant v4 UUID and return it encoded in base-58.  This is great for creating unique IDs which only consume 22 characters of storage.  Also provides base-58 encoding and decoding.

## Installation

```sh
npm install uuid-base58
```

## Usage

```typescript
import { uuid58 } from "uuid-base58";

const id = uuid58();
```

## API

The uuid58 package provides three functions which can be imported

+ `uuid58` - creates the RFC4122 v4 UUID encoded in base-58
+ `encode(string)` - encodes a base-16 string in base-58
+ `decode(string)` - decodes a string from base-58 to base-16

## Testing

```sh
npm run test
```

## Performance Hit

There is an additional performance hit to translate a v4 UUID into base58.  In testing I found the overhead for the translation to base58 adds an additional 31%.  In 100k calculation batches I found that v4 uuid calculation took 1.606s/100k vs 2.319s/100k for uuid58.  Thus, 69% of the runtime was consumed calculating a v4 uuid.  Additional work could be done to bring the uuid calculation internal and attempt to increase performance.

![performance graph](https://raw.githubusercontent.com/cbschuld/uuid-base58/master/__tests__/performance.png)