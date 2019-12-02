const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack=require('webpack');

module.exports = {
    entry: {
        index:'./src/script/index.js',
        // vendor:['react','react-dom']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './build/script')//必须为绝对路径，resolve解析为绝对路径
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/script')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            publicPath: path.resolve(__dirname, './build/style')
                        },
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                      }, {
                        loader: 'less-loader' // compiles Less to CSS
                      }
                ],
            }
        ]
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "index.css",
            chunkFilename: "[id].css"//??
            // disable:process.env.NODE_ENV==='development'
        })
    //     new config.optimization.splitChunks({
    //         name: 'vendor'
    //         // filename: "vendor.js"
    //         // (Give the chunk a different name)
      
    //         // minChunks: Infinity,
    //         // (with more entries, this ensures that no other module
    //         //  goes into the vendor chunk)
    //       })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test:/[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            }
          }
        }
      }
    // externals:{//某些模块不用打包
    //     'react':'React',
    //     'react-dom':'ReactDOM'
    // }
};