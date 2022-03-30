const path = require('path');
const Copier = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/app.js'),
    output: {
        path: path.resolve('./dist'),
        filename:'app.js'
    },
    module:{
        rules: [{
            'test':/\.jsx?$/,
            'exclude':/node_modules/,
            'loader': 'babel-loader'
        }],
    },
    plugins:[
      new Copier({
        patterns: [
        {from: path.resolve('src/app.css'), to: path.resolve('dist/css')},
        {from: path.resolve('assets'), to: path.resolve('dist')}
      ],
      })
    ]
};
