export default {
  input: 'src/index.js',        // 入口文件
  output: {
    file: 'dist/index.js', // 输出路径
    name: 'mitt',         // 全局变量名，在浏览器中可以通过 window.mitt 访问
    format: 'umd',               // 支持多种模块格式（AMD / CommonJS / 浏览器全局）
    sourcemap: false              // 是否生成 source map
  }
};