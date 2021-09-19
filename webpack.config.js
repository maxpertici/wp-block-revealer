const externals = {
    wp: 'wp',
    react: 'React',
    'react-dom': 'ReactDOM',
};

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    
    mode,

    entry : ['./src/js/wp-block-revealer.js', './src/scss/wp-block-revealer.scss'] ,
    
    output: {
        // path: __dirname,
        filename: './wp-block-revealer.build.js',
        path: path.resolve(__dirname, 'dist'),
    },

    externals,

    plugins: [
      new MiniCssExtractPlugin({
        insert : '',
        runtime : false,
        filename: "wp-block-revealer.css"
      })
    ],
    
    module: {
      
      rules: [
      
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: './',
                    emit : true,
                  },
                },
                'css-loader',
                'sass-loader'
              ]
            }
        ],
    },
};

