import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileName = 'fileToWrite.txt';
    const filePath = `${__dirname}/files/${fileName}`;

    const fileWriteStream = (await fs.open(filePath, 'w')).createWriteStream();

    process.stdin.pipe(fileWriteStream);
};

await write();