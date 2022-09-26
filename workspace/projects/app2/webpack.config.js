const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4202/',
    uniqueName: 'module2',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'module2',
      library: { type: 'var', name: 'module2' },
      filename: 'remoteEntry.js',
      exposes: {
        Module2Module: './projects/app2/src/app/module2/module2.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true }
      },
    }),
  ],
};
