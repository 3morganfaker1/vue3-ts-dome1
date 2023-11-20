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
    <el-table :data="dataList.comlist" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="introduce" label="Introduce" />
    </el-table>
    <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next"
        :total="selectData.count" />
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
        onMounted,
        reactive,
        toRefs,
        watch
    } from 'vue'
    import {
        getGoodList
    } from '@/request/api';
    import {
        listData,
        goodList
    } from '../type/goods'
    export default defineComponent({
        setup() {
            const data = reactive(new listData());
            onMounted(() => {
                getGoods();
            })
            const getGoods = () => {
                getGoodList().then((res) => {
                    data.list = res.data.goodList;
                    data.selectData.count = res.data.goodList.length;
                })
            }
            const dataList = reactive({
                comlist: computed(() => {
                    return data.list.slice((data.selectData.page - 1) * data.selectData
                        .pageSize, data.selectData.page * data.selectData.pageSize);
                })
            })
            const currentChange = (page: number) => {
                data.selectData.page = page;
            }
            const sizeChange = (pageSize: number) => {
                data.selectData.pageSize = pageSize;
            }
            const onSubmit = () => {
                let arr: goodList[] = [];
                if (data.selectData.title || data.selectData.introduce) {
                    if (data.selectData.title) {
                        arr = data.list.filter((value) => {
                            return value.title.indexOf(data.selectData.title) !== -1;
                        })
                    }
                    if (data.selectData.introduce) {
                        arr = data.list.filter((value) => {
                            return value.introduce.indexOf(data.selectData.introduce) !== -1;
                        })
                    }
                } else {
                    arr = data.list;
                }
                data.selectData.count = arr.length;
                data.list = arr;
            }
            watch([() => data.selectData.title, () => data.selectData.introduce], () => {
                if (data.selectData.title == '' && data.selectData.introduce == '') {
                    getGoods();
                }
            })
            return {
                ...toRefs(data),
                currentChange,
                sizeChange,
                dataList,
                onSubmit,
                getGoods
            }
        }
    })
</script>

<style scoped>

</style>