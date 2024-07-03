const path = require('path'); // node.js的核心模塊，用於處理文件與目錄的路徑

module.exports = {
  // 入口文件
  entry: "./src/main.js", // 相對路徑
  // 出口文件
  output: {
    // 文件輸出路徑
    // __dirname: node.js的全局變量，表示當前文件的目錄絕對路徑
    path: path.resolve(__dirname, "dist"), // 絕對路徑
    // 文件名
    filename: "main.js",
  },
  // 加載器
  module: {
    rules: [
      // loader 的配置
      {
        test: /\.css$/, // 檢查文件是否以.css結尾（正則表達式）
        use: [
          // 執行順序，從右到左，從下到上
          // css-loader: 讀取 css 文件 => style-loader: 將 css添加到 DOM 節點中
          "style-loader", // 將 js 中 css 通過創建 style 標籤插入到 head 中
          "css-loader", // 將 css 轉換成 commonjs 對象
        ],
      },
      {
        test: /\.less$/,
        // loader: "less-loader", // 只能使用一個 loader
        use: [ // 使用多個 loader
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader", // 將 less 轉換成 css
        ],
      },
    ],
  },
  // 插件
  plugins: [
    // 插件的配置
  ],
  // 模式
  mode: "development", // 開發模式
};