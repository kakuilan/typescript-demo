// UMD通用模块定义语法

(function(root, factory) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("b"));
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(["b"], function(b) {
      return (root.returnExportsGloabl = factory(b));
    });
  } else {
    // 全局变量
    root.returnExportsGloabl = factory(root.b);
  }
})(this, function(b) {
  // 真正的模块
  return {};
});
