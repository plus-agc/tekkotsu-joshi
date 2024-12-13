const fs = require("fs");
const path = require("path");

// 現在のディレクトリ内のすべてのHTMLファイルを検索
const htmlDir = "."; // カレントディレクトリを対象にする

fs.readdir(htmlDir, (err, files) => {
  if (err) {
    console.error("ディレクトリの読み込みエラー:", err);
    return;
  }

  // 拡張子が .html のファイルをフィルタリング
  const htmlFiles = files.filter((file) => path.extname(file) === ".html");

  if (htmlFiles.length === 0) {
    console.log("HTMLファイルが見つかりません。");
    return;
  }

  // 各HTMLファイルの画像パスを置き換える
  htmlFiles.forEach((file) => {
    const filePath = path.join(htmlDir, file);

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`ファイル読み込みエラー: ${file}`, err);
        return;
      }

      // .jpg, .jpeg, .png を .webp に置き換える
      const updatedData = data.replace(/\.(jpg|jpeg|png)/g, ".webp");

      // 変更をファイルに書き戻す
      fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
          console.error(`ファイル書き込みエラー: ${file}`, err);
        } else {
          console.log(`${file} の画像パスをWebPに置き換えました`);
        }
      });
    });
  });
});
