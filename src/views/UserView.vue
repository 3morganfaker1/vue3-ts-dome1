<template>
    <div>
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
            <el-form-item label="name">
                <el-input v-model="selectData.name" placeholder="please enter keyWords" clearable />
            </el-form-item>
            <el-form-item label="role">
                <el-select v-model="selectData.role" class="m-2" placeholder="Select" size="large">
                    <el-option label="all" :value="''" />
                    <el-option v-for="item in roleList" :key="item.roleName" :label="item.roleName"
                        :value="item.roleName" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query select</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="list" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="Title" width="180" />
        <el-table-column prop="role" label="Role" />
        <el-table-column prop="id" label="edit">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="changeRole(scope.row)">
                    edit
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="isShow" title="编辑信息">
        <el-form :model="active">
            <el-form-item label="Name" label-width="50px">
                <el-input v-model="active.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" label-width="50px">
                <el-select v-model="active.role" placeholder="Please select a zone">
                    <el-option v-for="item in roleList" :key="item.roleName" :label="item.roleName"
                        :value="item.roleName" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="updateUser">更改</el-button>
                <el-button type="primary" @click="isShow = false">
                    取消
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
    import {
        defineComponent,
        onMounted,
        reactive,
        toRefs,
        watch
    } from 'vue'
    import {
        getUserList,
        getRoleList
    } from '@/request/api';
    import {
        userData,
        select
    } from '../type/user'
    import {
        listData
    } from '@/type/goods';

    export default defineComponent({
        setup() {
            const data = reactive(new userData());
            onMounted(() => {
                getRole();
                getUser();
            })
            const getUser = () => {
                getRoleList().then((res) => {
                    console.log(res);
                    console.log("res--", res)
                    data.roleList = res.data;
                })
            }
            const getRole = () => {
                getUserList().then((res) => {
                    console.log("res1--", res)
                    console.log(res)
                    data.list = res.data.list;
                })
            }
            const onSubmit = () => {
                console.log(data.selectData.role)
                let arr: select[] = [];
                if (data.selectData.name || data.selectData.role) {
                    console.log('3')
                    if (data.selectData.name) {
                        console.log('4', data.selectData.name)
                        arr = data.list.filter((value) => {
                            return value.name.indexOf(data.selectData.name) !== -1;
                        })
                    }
                    if (data.selectData.role) {
                        console.log('5', data.selectData.role, data.selectData.name)
                        arr = (data.selectData.name ? arr : data.list).filter((value) => {
                            return value.role.indexOf(data.selectData.role) !== -1;
                        })
                    }
                } else {
                    console.log('2', data.list)
                    getRole();
                    arr = data.list;
                }
                console.log('1', arr)
                data.list = arr;
            }
            watch([() => data.selectData.name, () => data.selectData.role], () => {
                if (data.selectData.name == '') {
                    getUser();
                }
            })
            const changeRole = (row: any) => {
                console.log("row", row);
                data.isShow = true
                data.active = {
                    id: row.id,
                    role: row.role,
                    name: row.name
                }
            }
            const updateUser = ()=> {
                //  console.log('>>>',data.active)
                let obj = data.list.find((value)=>value.id == data.active.id);
                obj!.name = data.active.name;
                obj!.role = data.active.role;
                data.list.forEach((value,index)=>{
                    if(value.id == obj!.id){
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        data.list[index] = obj!; 
                    }
                })
                data.isShow = false;
            }
            return {
                getUser,
                getRole,
                ...toRefs(data),
                onSubmit,
                changeRole,
                updateUser
            }
        }
    })
</script>

<style scoped>

</style>