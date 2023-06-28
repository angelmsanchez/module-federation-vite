const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
 
module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug in CLI 11 Beta
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
 
      // For remotes (please adjust)
      name: "mfe1",
      library: { type: "var", name: "mfe1" },
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/mfe1/src/app/flights/flights.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};