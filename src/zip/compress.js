import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const inputFilePath = `${__dirname}/files/fileToCompress.txt`;
    const outputFilePath = `${__dirname}/files/archive.gz`;

    const gzip = createGzip();
    const fileReadStream = (await fs.open(inputFilePath)).createReadStream();
    const fileWriteStream = (await fs.open(outputFilePath, 'w')).createWriteStream();

    fileReadStream.pipe(gzip).pipe(fileWriteStream);
};

await compress();