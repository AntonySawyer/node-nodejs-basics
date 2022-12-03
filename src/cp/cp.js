import path from 'node:path';
import cp from 'child_process';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = `${__dirname}/files/script.js`;

    cp.fork(filePath, args, { stdio: 'inherit' });
};

spawnChildProcess();