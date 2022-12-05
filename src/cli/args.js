const parseArgs = () => {
    const varPrefix = '--';

    const result = process.argv.reduce((output, currentValue, currentIndex, array) => {
        if (currentValue.includes(varPrefix)) {
            const valueToPrint = `${currentValue} is ${array[currentIndex + 1]}`;

            return [...output, valueToPrint];
        }

        return output;
    }, []);

    console.log(result.join(', '));
};

parseArgs();