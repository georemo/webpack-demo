const path = require("path");
const glob = require("glob");
const {
  mode
} = require("webpack-nano/argv");
const {
  merge
} = require("webpack-merge");
const parts = require("./webpack.parts");
// const cssLoaders = [parts.tailwind()];
const cssLoaders = [parts.autoprefix(), parts.tailwind()];

// const config = {
//   module: {
//     rules: [
//       {
//         // **Conditions** to match files using RegExp, function.
//         test: /\.js$/,
//         // **Restrict** matching to a directory.
//         include: path.join(__dirname, "app"),
//         exclude: (path) => path.match(/node_modules/),
//         // **Actions** to apply loaders to the matched files.
//         use: "babel-loader",
//       },
//     ],
//   },
// };

const commonConfig = merge([{
    entry: ["./src"],
  },
  // {entry: { style: glob.sync("./src/**/*.css") }},
  parts.page({
    title: "Demo"
  }),
  // parts.loadCSS(),
  // parts.extractCSS(),
  parts.extractCSS({
    loaders: cssLoaders
  }),
  parts.loadImages({
    limit: 15000
  }),
  parts.loadJavaScript(),
  // clean
  { output: { path: path.resolve(process.cwd(), "dist") } },
  parts.clean(),
]);

// const productionConfig = merge([]);
const productionConfig = merge([
  parts.eliminateUnusedCSS(),
  // parts.generateSourceMaps({ type: "source-map" }),

  // bundle splitting
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "initial",
          },
        },
      },
    },
  },
  // versioning
  parts.attachRevision(),

]);


const developmentConfig = merge([{
    entry: ["webpack-plugin-serve/client"]
  },
  parts.devServer(),
]);

// const getConfig = (mode) => {
//   switch (mode) {
//     case "production":
//       return merge(commonConfig, productionConfig, { mode });
//     case "development":
//       return merge(commonConfig, developmentConfig, { mode });
//     default:
//       throw new Error(`Trying to use an unknown mode, ${mode}`);
//   }
// };

// Remember to set "mode": "production" in productionConfig
// so webpack knows to compile for the production target.
const getConfig = (mode) => {
  switch (mode) {
    case "prod:legacy":
      process.env.BROWSERSLIST_ENV = "legacy";
      return merge(commonConfig, productionConfig);
    case "prod:modern":
      process.env.BROWSERSLIST_ENV = "modern";
      return merge(commonConfig, productionConfig);
    case "production":
      return merge(commonConfig, productionConfig, {
        mode
      });
    case "development":
      return merge(commonConfig, developmentConfig, {
        mode
      });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);