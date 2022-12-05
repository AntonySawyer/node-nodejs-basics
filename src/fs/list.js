import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const dirnameToList = `${__dirname}/files`;

    fs.readdir(dirnameToList)
        .then((result) => {
            result.map((file) => (
                console.log(file)
            ))
        })
        .catch(() => {
            throw Error('FS operation failed');
        });

};

await list();