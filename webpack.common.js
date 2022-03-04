const path = require('path');

module.exports = {
    target: 'web',
    entry: {
        'test': './test.tsx',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        library: {
            type: 'umd',
            name: '[name]'
        }
    }
}
