const path = require('path');
const config= {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist')
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },

                ], // compiles Less to CSS
            },
        ]
    },





    // dev tool

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },

    devtool : "eval",
    watch: true,


}


module.exports = config;