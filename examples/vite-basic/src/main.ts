import { uuid58, valid } from 'uuid-base58';

const app = document.querySelector<HTMLDivElement>('#app')!;

const id = uuid58();

app.innerHTML = `
  <p>uuid58: <code>${id}</code></p>
  <p>valid: ${valid(id)}</p>
`;

