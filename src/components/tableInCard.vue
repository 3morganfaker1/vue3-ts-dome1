<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ listData!.ComponentName }}</span>
      </div>
    </template>
    <div height="200px">
      <el-table :data="listData?.data">
        <el-table-column prop="name" label="属性名" width="100"/>
        <el-table-column prop="type" label="类型" width="100"/>
        <el-table-column prop="illustrate" label="说明" width="180" />
        <el-table-column prop="defalutValue" label="默认值" width="100"/>
        <!-- <el-table-column prop="version" label="版本" /> -->
        <el-table-column prop="required" label="是否必填" width="100"/>
        <el-table-column prop="value" label="值" width="100"/>
        <el-table-column prop="attrs" label="合法值/类型说明">
          <template v-slot="scope">
            <div v-for="(item, index) in scope.row.attrs" :key="index" class="children_attr">
              <div>name: {{ item.name }}</div>
              <div>value: {{ item.value }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tag" label="状态" />
      </el-table>
      <el-divider />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { FormType, FormTypeData } from "@/type";
const props = defineProps({
  listData: Object as () => {
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
  },
});
</script>

<style scoped>
</style>
