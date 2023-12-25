<template>
  <div class="container">
    <div class="diff_table">
      <diffResultTable
        :is-component="isComponent"
        :list-data="componentData"
      ></diffResultTable>
    </div>
    <div class="diff_table">
      <diffResultTable
        :is-component="!isComponent"
        :list-data="apiData"
      ></diffResultTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import diffResultTable from "../../src/components/diffResultTable.vue";
const isComponent = ref(true);

const form = reactive({
  region: "",
  dateBefore: "",
  dateAfter: "",
  paraType: "",
});

const submit = () => {
  console.log("submit");
};

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

//拿到所有数据后要处理下，分成component和api传给不同的子组件
const apiData = [
  {
    ComponentName: "tt.onAppShow",
    data: [
      {
        version: "1.1.0",
        value: "test value",
        required: "是",
        type: "string",
        tag: "new",
        defalutValue: "test defalut",
        illustrate: "test introduce",
        name: "schma",
      },
      {
        version: "1.0.0",
        value: "test value2",
        required: "是",
        type: "string",
        tag: "new",
        defalutValue: "test defalut",
        illustrate: "test introduce",
        name: "space",
      },
    ],
  },
];

const componentData = [
  {
    ComponentName: "button组件",
    data: [
      {
        name: "selectable",
        type: "boolean",
        defalutValue: "false",
        required: "否",
        illustrate: "是否可以选中文字",
        version: "1.0.0​",
        tag: "update",
        value: "test value",
      },
      {
        name: "space",
        type: "string",
        defalutValue: "",
        required: "否",
        illustrate: "是否显示连续的空格可以取值enspemspnbsp详见space的合法值",
        version: "1.0.0​",
        tag: "new",
        value: "test value",
      },
    ],
  },
  {
    ComponentName: "text组件",
    data: [
      {
        name: "selectable",
        type: "boolean",
        defalutValue: "false",
        required: "否",
        illustrate: "是否可以选中文字",
        version: "1.0.0​",
        tag: "update",
        value: "test value",
      },
      {
        name: "space",
        type: "string",
        defalutValue: "",
        required: "否",
        illustrate: "是否显示连续的空格可以取值enspemspnbsp详见space的合法值",
        version: "1.0.0​",
        tag: "new",
        attrs: [
          {
            name: "children name",
            value: "children value",
            illustrate: "children illustrate",
          },
          {
            name: "children1 name",
            value: "children2 value",
            illustrate: "children3 illustrate",
          },
        ],
        value: "test value",
      },
    ],
  },
];
</script>

<style scoped>
.container {
}
.card-table {
  margin-top: 20px;
}
.form {
  height: 10px;
}
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
