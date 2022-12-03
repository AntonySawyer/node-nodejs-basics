const parseArgs = () => {
    const varPrefix = '--';
    const prefixedArgs = process.argv.slice(' ');

    const result = prefixedArgs.reduce((output, currentValue, currentIndex, array) => {
        if (currentValue.includes(varPrefix)) {
            const valueToPrint = `${currentValue} is ${array[currentIndex + 1]}`;

            return [...output, valueToPrint];
        }

        return output;
    }, []);

    console.log(result.join(', '));
};

parseArgs();