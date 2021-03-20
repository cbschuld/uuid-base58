import { v4 as uuid } from '../../src/uuid/v4';

for(let i = 0; i < 100000; i++) {
    const id = uuid();
}
