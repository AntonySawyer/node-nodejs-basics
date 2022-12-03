import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileName = 'fileToRead.txt';
    const filePath = `${__dirname}/files/${fileName}`;

    const fileReadStream = (await fs.open(filePath)).createReadStream();

    fileReadStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();