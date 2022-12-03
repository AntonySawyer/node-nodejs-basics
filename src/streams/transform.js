import stream from 'stream';

const transform = async () => {
    const transformStream = new stream.Transform({
        transform: (chunk, encoding, callback) => {
            const reversedChunk = String(chunk).split('').reverse().join('');
            const result = `${reversedChunk}\n`

            callback(null, result);
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();