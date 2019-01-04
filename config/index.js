const path = require("path");

const config = {
  projectName: "taro-boilerplate",
  date: "2018-11-29",
  designWidth: 750,
  deviceRatio: {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: {
    babel: {
      sourceMap: true,
      presets: ["env"],
      plugins: [
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-object-rest-spread"
      ]
    }
  },
  defineConstants: {},
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
    "@components": path.resolve(__dirname, "..", "src/components"),
    "@utils": path.resolve(__dirname, "..", "src/utils")
  },
  copy: {
    patterns: [{ from: "src/static", to: "dist/static" }],
    options: {}
  },
  weapp: {},
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.SITE_ENV === "dev") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
