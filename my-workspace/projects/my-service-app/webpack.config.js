const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "my-service",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "my-service",
      library: { type: "var", name: "my-service" },
      filename: "remoteEntry.js",
      exposes: {
        ProfileModule:
          "./projects/my-service-app/src/app/my-service/my-service.module.ts",
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true }
      }
    })
  ]
};
