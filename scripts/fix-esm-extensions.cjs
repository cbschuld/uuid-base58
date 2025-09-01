const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'lib', 'esm', 'index.js');

try {
  let src = fs.readFileSync(file, 'utf8');
  // Replace extensionless relative imports for Node ESM compatibility
  src = src.replace(/from\s+"\.\/uuid58"/g, 'from "./uuid58.js"');
  src = src.replace(/from\s+'\.\/uuid58'/g, "from './uuid58.js'");
  src = src.replace(/from\s+"\.\/uuid\/v4"/g, 'from "./uuid/v4.js"');
  src = src.replace(/from\s+'\.\/uuid\/v4'/g, "from './uuid/v4.js'");
  fs.writeFileSync(file, src, 'utf8');
  console.log('Patched ESM import extensions in', file);
} catch (e) {
  console.warn('Skipping ESM extension patch:', e.message);
}

