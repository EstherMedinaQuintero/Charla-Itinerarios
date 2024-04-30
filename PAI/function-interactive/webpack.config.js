const path = require('path'); 

module.exports = { 
  mode: 'development', 
  entry: './trapezoidal-rule.ts', 
  output: { 
    filename: 'trapezoidal-rule.js', 
    path: path.resolve(__dirname, './out'), 
  }, 
  module: { 
    rules: [ { 
      test: /\.tsx?$/, 
      use: 'ts-loader', 
      exclude: /node_modules/, 
    } ]
  }, 
  resolve: { 
    extensions: [
      '.ts', 
      '.js'
    ] 
  } 
};