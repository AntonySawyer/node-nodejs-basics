import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const oldFilePath = `${__dirname}/files/${oldFileName}`;
    const newFilePath = `${__dirname}/files/${newFileName}`;

    fs.access(newFilePath)
        .then(() => {
            // if resolve called -> file already exist
            throw Error('FS operation failed')
        }, () => {
            // if reject called -> file not exist and we can try to rename
            fs.rename(oldFilePath, newFilePath)
                .catch(() => {
                    throw Error('FS operation failed');
                });
        });

};

await rename();