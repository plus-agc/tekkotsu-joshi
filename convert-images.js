const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "input"; // 入力画像フォルダ
const outputDir = "img"; // 出力フォルダ

// 出力フォルダが存在しない場合は作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 画像をWebPに変換する関数
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("エラー:", err);
    return;
  }

  files.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(
      outputDir,
      path.parse(file).name + ".webp"
    );

    sharp(inputFilePath)
      .webp({ quality: 80 })
      .toFile(outputFilePath)
      .then(() => console.log(`${file} をWebPに変換しました`))
      .catch((err) => console.error("変換エラー:", err));
  });
});
