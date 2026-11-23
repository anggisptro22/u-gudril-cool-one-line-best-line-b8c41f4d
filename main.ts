import * as fs from 'fs';

const ENTRY = 'I trained my cat to fetch the paper, but he only delivers neighbor petitions against his midnight opera.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY);
