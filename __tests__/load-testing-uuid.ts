import { v4 as uuid } from 'uuid';

for(let i = 0; i < 100000; i++) {
    const id = uuid();
}
