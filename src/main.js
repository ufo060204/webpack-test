import count from "./js/count";
import sum from "./js/sum";
// 想要 webpack 打包的文件，必須通過入口文件引入進行打包
import "./css/index.css";
import "./css/index.less";
import "./sass/index.scss";
import "./sass/index.sass";

console.log("count(1, 2) = ", count(1, 2));
console.log("sum(1, 2, 3) = ", sum(1, 2, 3));