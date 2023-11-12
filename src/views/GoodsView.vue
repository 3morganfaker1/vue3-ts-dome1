<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="title">
                    <el-input v-model="selectData.title" placeholder="please enter keyWords" clearable />
                </el-form-item>
                <el-form-item label="detail">
                    <el-input v-model="selectData.introduce" placeholder="please enter keyWords" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query select</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent, reactive, toRefs
    } from 'vue'
    import {
        getGoodList
    } from '@/request/api';
    import{ listData } from '../type/goods'
    export default defineComponent({
        setup() {
            const data = reactive(new listData()); 
            getGoodList().then((res) => {
                console.log('res', res)
            })

            return {
                ...toRefs(data)
            }
        }
    })
</script>

<style scoped>

</style>