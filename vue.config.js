const merge = require("webpack-merge");
module.exports = merge(
  {
    productionSourceMap: false,
    lintOnSave: false,
    css: {
      extract: false
    }
  },
  process.env.NODE_ENV === "production"
    ? {
        configureWebpack: {
          externals: {
            "@ncform/ncform-common": {
              root: "ncformCommon",
              commonjs2: "@ncform/ncform-common",
              commonjs: "@ncform/ncform-common",
              amd: "ncformCommon"
            }
          },
          resolve: {
            alias: {
              moment: 'moment/src/moment'
            }
          }
        }
      }
    : {}
);
