"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bgcolor: "#c00",
      num: 0
    };
  },
  methods: {
    clickBg() {
      this.num++;
      let color = "#" + String(Math.random()).substr(3, 6);
      this.bgcolor = color;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.num),
    b: $data.bgcolor,
    c: common_vendor.o((...args) => $options.clickBg && $options.clickBg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/andyron/myfield/github/LearnFrontend/notes/uniapp零基础入门/demo1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
