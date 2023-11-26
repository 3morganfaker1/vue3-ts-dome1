<template>
    <div>
        <el-tree
    ref="treeRef"
    :data="list"
    show-checkbox
    node-key="id"
    :default-checked-keys="authority"
    :check-strictly="true"
    :props="{
        children: 'roleList',
        label: 'name',
    }"
  /> 
  <el-button @click="changeAuthority">change authority</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router';
import { InitData } from '@/type/authority';
import { getAuthorityList } from '../request/api'
export default defineComponent({
    setup () {
        const route = useRoute()
        const params:any = route.params;
        const data = reactive(new InitData(params.id, params.params));
        onMounted(()=>{
            getAuthorityList().then((res)=>{
                data.list = res.data;
            })
        })

        const changeAuthority = ()=> {
            //@typescript-eslint/no-empty-function
            console.log('change authority hi');
            let a = 1;
        }
        return {
            ...toRefs(data),
            changeAuthority
        }
    }
})
</script>

<style scoped>

</style>