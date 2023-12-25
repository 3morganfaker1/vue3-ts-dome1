const mockData = [
  {
    ComponentName: "tt.canIUse",
    attrs: {
      paraDescribe: {
        attrs: [
          {
            type: "string​",
            defalutValue: "​",
            required: "是​",
            illustrate:
              "用来测试的能力，模式为 ${API}.${method}.${param}.${option} 或 ${component}.${attribute}.${option} 或 Page.${method} 或者 Page.${attribute} 或 Component.${method} 或 Component.${attribute}​",
            version: "1.35.0​",
            name: "schema​",
            attrs: [
              {
                value: "${API}​",
                illustrate: "API 名字​",
                version: "1.35.0​",
              },
              {
                value: "${method}​",
                illustrate:
                  "调用方式，有效值为 return、success、object、callback​",
                version: "1.35.0​",
              },
              {
                value: "${param}​",
                illustrate: "参数或者返回值​",
                version: "1.35.0​",
              },
              {
                value: "${option}​",
                illustrate: "参数的有效值或者返回值的属性或者组件属性的有效值​",
                version: "1.35.0​",
              },
              {
                value: "${component}​",
                illustrate: "组件名字​",
                version: "1.35.0​",
              },
              {
                value: "${attribute}​",
                illustrate: "组件属性​",
                version: "1.35.0​",
              },
            ],
          },
        ],
        name: "paraDescribe",
      },
    },
    introduce: "判断小程序的 API、回调、参数、组件等是否在当前版本可用。​",
    version: "基础库 1.35.0 开始支持本方法，这是一个同步方法。​",
    platform: "douyin",
    key: "ttcanIUse",
    type:"api"
  },
  {
    ComponentName: "text 文本",
    attrs: {
      "selectable​": {
        name: "selectable",
        type: "boolean",
        defaultValue: "false",
        required: "否",
        illustrate: "是否可以选中文字",
        version: "1.0.0​",
        attrs: {},
      },
      "space​": {
        name: "space",
        type: "string",
        defaultValue: "",
        required: "否",
        illustrate: "是否显示连续的空格可以取值enspemspnbsp详见space的合法值",
        version: "1.0.0​",
        attrs: [
          {
            value: "ensp​",
            illustrate: "中文字符空格一半大小。​",
            version: "1.0.0​",
          },
          {
            value: "emsp​",
            illustrate: "中文字符空格大小。​",
            version: "1.0.0​",
          },
          {
            value: "nbsp​",
            illustrate: "根据字体设置的空格大小。​",
            version: "1.0.0​",
          },
        ],
      },
      "decode​": {
        name: "decode",
        type: "boolean",
        defaultValue: "false",
        required: "否",
        illustrate: "是否转义",
        version: "1.0.0​",
        attrs: {},
      },
    },
    illutrate: "文本组件。​",
    version: "基础库 1.0.0 开始支持本组件。​",
    platform: "douyin",
    key: "text",
    type: "component",
    tag: "update",
  },
];

const componentArr = [], apiArr = [];
for (const detail of mockData) {
    detail.type == "api" ? apiArr.push(detail.attrs) : componentArr.push(detail.attrs);
}
console.log(componentArr);
