<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <el-scrollbar>
        <tableInCard v-for="(item, index) in listData" :key="index" :list-data="item"/>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import tableInCard from "./tableInCard.vue";
import { FormType, FormTypeData } from '../type/index';

const props = defineProps({
  isComponent: Boolean,
  listData: Array as () => ({
        ComponentName: string;
        data: {
          version: string;
          value: string;
          required: string;
          type: string;
          tag: string;
          defalutValue: string;
          illustrate: string;
          attrs?: FormTypeData[];
          name: string;
        }[];
      })[],
});

const title = computed(() => {
  return props.isComponent ? "Component" : "API";
});

</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_body {
  height: 300px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  margin-top: 5px;
}
</style>
