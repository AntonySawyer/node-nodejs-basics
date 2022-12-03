import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFolderPath = `${__dirname}/files`;
    const targetFolderPath = `${__dirname}/files_copy`;

    fs.cp(sourceFolderPath, targetFolderPath, { errorOnExist: true, force: false, recursive: true })
        .catch(() => {
            throw Error('FS operation failed');
        });
};

copy();