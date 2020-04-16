module.exports = {
    mode: 'development',
    entry: './index.mjs',
    output: {
        filename: './main.js',
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
 