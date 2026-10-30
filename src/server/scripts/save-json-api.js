import fs from 'node-fs';
import getDb from '../db/index.js';

const constDb = getDb();

fs.mkdir('./dist/static/db', { recursive: true }, (err) => {
  if (err && err.code !== 'EEXIST') throw err;
  for (let [key, value] of Object.entries(constDb)) {
    fs.writeFile(
      `./dist/static/db/${key}.json`,
      JSON.stringify(value),
      (writeErr) => { if (writeErr) throw writeErr; }
    );
  }
});
