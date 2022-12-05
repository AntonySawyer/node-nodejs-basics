import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const inputFilePath = `${__dirname}/files/archive.gz`;
    const outputFilePath = `${__dirname}/files/fileToCompress.txt`;

    const gzip = createUnzip();
    const fileReadStream = (await fs.open(inputFilePath)).createReadStream();
    const fileWriteStream = (await fs.open(outputFilePath, 'w')).createWriteStream();

    fileReadStream.pipe(gzip).pipe(fileWriteStream);
};

await decompress();