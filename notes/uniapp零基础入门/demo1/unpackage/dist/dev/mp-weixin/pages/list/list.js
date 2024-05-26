"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_pubTitle2 = common_vendor.resolveComponent("pubTitle");
  _easycom_pubTitle2();
}
const _easycom_pubTitle = () => "../../components/pubTitle/pubTitle.js";
if (!Math) {
  _easycom_pubTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "列表",
      subtitle: "别表副标题"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/andyron/myfield/github/LearnFrontend/notes/uniapp零基础入门/demo1/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
