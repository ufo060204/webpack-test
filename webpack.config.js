const { type } = require('os');
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
    filename: "static/js/main.js",
    // 自動清空上次打包的文件
    // 原理：每次打包前，先刪除 dist 文件夾，再重新生成
    clean : true // 清除 dist 文件夾
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
        use: [
          // 使用多個 loader
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader", // 將 less 轉換成 css
        ],
      },
      {
        test: /\.s[ac]ss$/, // 檢查文件是否以.sass或.scss結尾（正則表達式）
        // loader: "less-loader", // 只能使用一個 loader
        use: [
          "style-loader",
          "css-loader",
          "sass-loader", // 將 sass 轉換成 css
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|webp)$/i, // 檢查文件是否以.png、.jpg、.jpeg、.gif結尾（正則表達式）
      //   type: "asset/resource", // 使用 asset 資源模組類型
      // },
      {
        // 依據不同的文件大小，使用不同的打包策略
        test: /\.(png|jpe?g|gif|webp)$/i, // 檢查文件是否以.png、.jpg、.jpeg、.gif結尾（正則表達式） i: 不區分大小寫
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 小於 10kb 的圖片轉換成 base64
            // 優點：減少請求次數（減少請求時間）
            // 缺點：增加文件體積（文件變大，請求時間變長）
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          // 輸出圖片的文件名
          //hash:10 取圖片的 hash 的前 10 位
          // filename: 'static/images/[hash:10][ext][query]'
          filename: 'static/images/[name][ext][query]'
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 檢查文件是否以.woff2、.woff、.eot、.ttf、.otf結尾（正則表達式）
        type: "asset/resource", // 使用 asset 資源模組類型
        generator: {
          // 輸出字體的文件名
          filename: 'static/fonts/[name][ext][query]'
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i, // 檢查文件是否以.mp4、.webm、.ogg、.mp3、.wav、.flac、.aac結尾（正則表達式）
        type: "asset/resource", // 使用 asset 資源模組類型
        generator: {
          // 輸出媒體的文件名
          filename: 'static/media/[name][ext][query]'
        },
      }
    ],
  },
  // 插件
  plugins: [
    // 插件的配置
  ],
  // 模式
  mode: "development", // 開發模式
};