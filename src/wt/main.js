import path from 'node:path';
import os from 'os';
import wt from 'worker_threads';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const workerPath = `${__dirname}/worker.js`;

    const numOfCpus = os.cpus().length;
    const STARTING_NUMBER = 10;

    const getPromiseResolve = (workerData) => {
        return (resolve) => {
            const worker = new wt.Worker(workerPath, { workerData });
            worker.on('message', (data) => (
                resolve({ status: 'resolved', data })
            ));
            worker.on('error', () => (
                resolve({ status: 'error', data: null })
            ));
        }
    }

    const promises = new Array(numOfCpus).fill().map((_val, index) => (
        new Promise(getPromiseResolve(STARTING_NUMBER + index))
    ));

    const promiseSettledResult = await Promise.allSettled(promises);
    const result = promiseSettledResult.map((value) => value.value);

    console.log(result);
};

await performCalculations();