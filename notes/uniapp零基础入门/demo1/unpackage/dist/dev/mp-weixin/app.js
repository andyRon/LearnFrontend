"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index2/index2.js";
  "./pages/index/index.js";
  "./pages/list/list.js";
  "./pages/about/about.js";
  "./pages/demo4/demo4.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
  // created: function() {
  // 	console.log('app created')
  // },
  // mounted: function() {
  // 	console.log('app mounted')
  // }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/andyron/myfield/github/LearnFrontend/notes/uniapp零基础入门/demo1/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
