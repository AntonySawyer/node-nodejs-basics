import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = `${__dirname}/files/fresh.txt`;
    const fileContent = 'I am fresh and young';

    const flag = 'wx'; // open file for writing and create if not exist, but fails if the path exists

    fs.writeFile(filePath, fileContent, { flag })
        .catch(() => {
            throw Error('FS operation failed');
        });
};

await create();