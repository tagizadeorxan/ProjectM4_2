module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: './dist/main.js',
    },

    //BABEL 

module: {
    rules: [
        {
         test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
  },
 };
 