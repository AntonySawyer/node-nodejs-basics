import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileName = 'fileToRead.txt';
    const filePath = `${__dirname}/files/${fileName}`;

    fs.access(filePath)
        .then(() => {
            fs.readFile(filePath, { encoding: 'utf-8' })
                .then((result) => console.log(result));
        })
        .catch(() => {
            throw Error('FS operation failed');
        });
};

await read();