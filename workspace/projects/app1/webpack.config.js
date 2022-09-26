const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'module1',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'module1',
      library: { type: 'var', name: 'module1' },
      filename: 'remoteEntry.js',
      exposes: {
        Module1Module: './projects/app1/src/app/module1/module1.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true }
      },
    }),
  ],
};
