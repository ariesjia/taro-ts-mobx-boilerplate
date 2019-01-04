const webfontsGenerator = require("webfonts-generator");
const fileType = require("file-type");
const fs = require("fs");
const path = require("path");

const baseIconPath = "icon/svgs/";
const svgsPath = path.join(process.cwd(), baseIconPath);
const generateCSSPath = path.join(
  process.cwd(),
  "src/styles/generate-icon.scss"
);
const tempalatePath = path.join(process.cwd(), "icon/css.hbs");

const files = fs
  .readdirSync(svgsPath)
  .filter(file => file.match(/\.svg$/))
  .map(file => {
    return `${baseIconPath}${file}`;
  });

const getBase64FromBuffer = buffer => {
  const mime = fileType(buffer).mime.replace("/", "-");
  const prefix = `data:application/${mime};charset=utf-8;base64,`;
  return prefix + buffer.toString("base64");
};

webfontsGenerator(
  {
    files,
    fontName: "generate-icon",
    cssTemplate: tempalatePath,
    templateOptions: {
      classPrefix: "ui-icon-",
      baseSelector: ".ui-icon"
    },
    types: ["woff"],
    dest: "./dest",
    writeFiles: false
  },
  function(error, result) {
    if (error) {
      console.log("Fail!", error);
    } else {
      const css = result.generateCss({
        woff: getBase64FromBuffer(result.woff)
      });
      fs.writeFileSync(generateCSSPath, css, "utf8");
      console.log("Done!");
    }
  }
);
