(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f57a"],{b2e9:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("page-layout",{attrs:{pageTitle:"Select 下拉框",docTitle:"基础用法 / 在element的基础上套了个ui壳子"}},[t("div",{staticStyle:{width:"200px"},attrs:{slot:"component"},slot:"component"},[t("h-select",{attrs:{height:"30px"}},[t("el-select",{model:{value:e.value,callback:function(l){e.value=l},expression:"value"}},[t("el-option",{attrs:{label:"全部",value:""}}),e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e._v("        "),t("code",{staticClass:"html"},[e._v('\n          <h-select height="30px">\n            <el-select v-model="value">\n              <el-option label="全部" value=""></el-option>\n              <el-option \n                v-for="item in options"\n                :key="item.value"\n                :label="item.label"\n                :value="item.value"\n                >\n              </el-option>\n            </el-select>\n          </h-select>\n        ')]),e._v("\n        "),t("code",{staticClass:"javascript"},[e._v("\n          export default {\n            data(){\n              return {\n                value: '',\n                options: [\n                  {\n                    value: '选项1',\n                    label: '黄金糕'\n                  }, {\n                    value: '选项2',\n                    label: '双皮奶'\n                  }, {\n                    value: '选项3',\n                    label: '蚵仔煎'\n                  }, {\n                    value: '选项4',\n                    label: '龙须面'\n                  }, {\n                    value: '选项5',\n                    label: '北京烤鸭'\n                  }\n                ]\n              }\n            }\n          }\n        ")]),e._v("\n      ")])])]),t("doc-params",{attrs:{title:"Attributes"}},[t("h-table",{attrs:{"data-length":e.params.length,"tr-height":50}},[t("el-table",{attrs:{data:e.params}},[t("el-table-column",{attrs:{prop:"params",label:"参数"}}),t("el-table-column",{attrs:{prop:"doc",label:"说明"}}),t("el-table-column",{attrs:{prop:"type",label:"类型"}}),t("el-table-column",{attrs:{prop:"required",label:"是否必填"}}),t("el-table-column",{attrs:{prop:"default",label:"默认值"}})],1)],1)],1)],1)},n=[],o={data:function(){return{value:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],params:[{params:"height",doc:"下拉框的高度",type:"Number",required:"否",default:"30px"}]}}},s=o,u=t("2877"),r=Object(u["a"])(s,a,n,!1,null,"9cbfbbc2",null);l["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d20f57a.ca704ca6.js.map