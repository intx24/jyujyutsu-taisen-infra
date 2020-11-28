const path = require('path');

module.exports = {
    entry: {
        'analyze-text': `${__dirname}/lambda/src/index-analyze-text.ts`,
        'fetch-infected-data': `${__dirname}/lambda/src/index-fetch-infected-data.ts`,
        'get-search-result-text': `${__dirname}/lambda/src/index-get-search-result-text.ts`,
        'get-trends': `${__dirname}/lambda/src/index-get-trends.ts`,
        'put-infected-data': `${__dirname}/lambda/src/index-put-infected-data.ts`,
    },
    output: {
        path: `${__dirname}/dest/pack`,
        filename: 'src/[name]/index.js',
        libraryTarget: 'commonjs2',
    },
    externals: [],
    target: 'node',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'lambda/src')],
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
