import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);


    const fileToHashName = 'fileToCalculateHashFor.txt';
    const fileToHashPath = `${__dirname}/files/${fileToHashName}`;

    fs.readFile(fileToHashPath)
        .then((fileData) => {
            return crypto.createHash('sha256')
                .update(fileData);
        })
        .then((result) => {
            console.log('result: ', result.digest('hex'))
        })
        .catch(() => {
            throw Error('FS operation failed: can not open file');
        });



};

await calculateHash();