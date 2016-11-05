const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: {
        app: "./src/client/index.tsx",
        vendor: ["react", "react-dom"]
    },
    output: {
      filename: "./dist/app/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loader: [
                    {
                        loader: "babel-loader",
                        options: {
                            "passPerPreset": true,
                            "presets": [ "react", "es2015", "stage-0" ],
                            "plugins": [
                                "babel-relay-plugin-loader",
                                "babel-plugin-transform-runtime"
                            ].map(require.resolve),
                        }
                    }, {
                        loader: "awesome-typescript-loader",
                    },
                ]
            }
        ],
        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "./dist/app/vendor.bundle.js" }),
    ]

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};