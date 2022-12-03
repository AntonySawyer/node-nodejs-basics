const parseEnv = () => {
    const prefix = 'RSS_';
    const rssVariables = Object.keys(process.env).filter((variable) => variable.includes(prefix));

    const result = rssVariables
        .map((variable) => (
            `${variable}=${process.env[variable]}`
        ))
        .join('; ')

    console.log(result);
};

parseEnv();