webpackJsonp([8],{LEfO:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l={methods:{openDialog:function(){this.$refs.dialog.show()},dialogAccepted:function(){console.log("accepted")},dialogCanceled:function(){console.log("canceled")}}},a={render:function(){var t=this.$createElement,o=this._self._c||t;return o("m-layout-grid-inner",[o("m-layout-grid-cell",{attrs:{span:12}},[o("m-typo-display",{attrs:{level:1}},[this._v("Dialog")]),o("m-typo-body",{attrs:{level:2}},[o("a",{attrs:{href:"https://github.com/matsp/material-components-vue/blob/master/components/Dialog"}},[this._v("\n        https://github.com/matsp/material-components-vue/blob/master/components/Dialog\n      ")])])],1),o("m-layout-grid-cell",[o("m-button",{attrs:{raised:""},on:{click:this.openDialog}},[this._v("openDialog")])],1),o("m-layout-grid-cell",[o("m-dialog",{ref:"dialog",on:{accepted:this.dialogAccepted,canceled:this.dialogCanceled}},[o("m-typo-headline",{attrs:{slot:"header"},slot:"header"},[this._v("Header")]),o("span",{attrs:{slot:"body"},slot:"body"},[this._v(" Body ")]),o("m-button",{attrs:{slot:"acceptButton"},slot:"acceptButton"},[this._v("Accept")]),o("m-button",{attrs:{slot:"cancelButton"},slot:"cancelButton"},[this._v("Cancel")]),o("m-button",{attrs:{slot:"dialogButton"},slot:"dialogButton"},[this._v("Anything")])],1)],1)],1)},staticRenderFns:[]},n=e("VU/8")(l,a,!1,null,null,null);o.default=n.exports}});