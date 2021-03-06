const {
    WebpackPluginServe
} = require("webpack-plugin-serve");
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: "./dist", // Expose if output.path changes
            liveReload: true,
            waitForBuild: true,
        }),
    ],
});

exports.page = ({
    title
}) => ({
    plugins: [new MiniHtmlWebpackPlugin({
        context: {
            title
        }
    })],
});

exports.loadCSS = () => ({
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, ],
    },
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.extractCSS = ({
    options = {},
    loaders = []
} = {}) => {
    return {
        module: {
            rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options
                    },
                    "css-loader",
                ].concat(loaders),
                sideEffects: true,
            }, ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
        ],
    };
};

exports.tailwind = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [require("tailwindcss")()]
        },
    },
});

const path = require("path");
const glob = require("glob");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");

const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));

exports.eliminateUnusedCSS = () => ({
    plugins: [
        new PurgeCSSPlugin({
            paths: ALL_FILES, // Consider extracting as a parameter
            extractors: [{
                extractor: (content) =>
                    content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
                extensions: ["html"],
            }, ],
        }),
    ],
});

exports.autoprefix = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [require("autoprefixer")()]
        },
    },
});

exports.loadImages = ({
    limit
} = {}) => ({
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            type: "asset",
            parser: {
                dataUrlCondition: {
                    maxSize: limit
                }
            },
        }, ],
    },
});

// babel config
const APP_SOURCE = path.join(__dirname, "src");

exports.loadJavaScript = () => ({
    module: {
        rules: [
            // Consider extracting include as a parameter
            {
                test: /\.js$/,
                include: APP_SOURCE,
                use: "babel-loader"
            },
        ],
    },
});

// source map config
exports.generateSourceMaps = ({
    type
}) => ({
    devtool: type
});

const webpack = require("webpack");
const Grp = require("git-revision-webpack-plugin");

exports.attachRevision = () => ({
    plugins: [
        new webpack.BannerPlugin({
            banner: new Grp.GitRevisionPlugin().version(),
        }),
    ],
});


// clean
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

exports.clean = () => ({
    plugins: [new CleanWebpackPlugin()]
});

// minification
const TerserPlugin = require("terser-webpack-plugin");

exports.minifyJavaScript = () => ({
    optimization: {
        minimizer: [new TerserPlugin()]
    },
});