import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRemoveName = 'fileToRemove.txt';
    const fileToRemovePath = `${__dirname}/files/${fileToRemoveName}`;

    fs.access(fileToRemovePath)
        .then(() => {
            // if resolve called -> file exist
            fs.unlink(fileToRemovePath)
        })
        .catch(() => {
            throw Error('FS operation failed');
        });
};

await remove();