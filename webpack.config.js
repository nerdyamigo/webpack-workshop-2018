const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require("webpack-merge");


// set some defaults 
module.exports = ({mode, presets} = { mode: "production", presets:[] }) => {
    return webpackMerge({     
        mode,
        module: {
            rules: [
                {
                    test: /\.jpe?g$/,
                    loader:[  "url-loader" ] 
                }
            ]
        },
        output: {
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ] 
     },
     modeConfig(mode)
    );
};
