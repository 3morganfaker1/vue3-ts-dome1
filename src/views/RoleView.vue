<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-button type="primary" @click="addRole">Add Role</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table :data="list" border style="width: 100%">
        <el-table-column prop="roleId" label="ID" width="180" />
        <el-table-column prop="roleName" label="角色名" width="180" />
        <el-table-column prop="authority" label="操作">
            <template #default="scope">
                <el-button size="small" @click="changeRole(scope.row)">
                    修改权限
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
    import {
        defineComponent,
        onMounted,
        reactive,
        toRefs
    } from 'vue'
    import {
        getRoleList
    } from '@/request/api';
    import {
        InitData,
        listInt
    } from '../type/role'
    import {
        ElMessage,
        ElMessageBox
    } from 'element-plus'
    import { useRouter } from 'vue-router';
    export default defineComponent({
        setup() {
            const router = useRouter()
            const data = reactive(new InitData())
            onMounted(() => {
                getRoleList().then((res) => {
                    console.log('reeeeee', res)
                    data.list = res.data
                    console.log(data.list)
                })
            })
            const addRole = () => {
                ElMessageBox.prompt('Please input role name', 'Add', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                    })
                    .then(({
                        value
                    }) => {
                        if(value){
                            data.list.push({
                                roleId: data.list.length + 1,
                                roleName: value,
                                authority:[]
                            }) 
                        }
                        ElMessage({
                            type: 'success',
                            message: `${value} add success`,
                        })
                    })
                    .catch(() => {
                        ElMessage({
                            type: 'info',
                            message: 'Input canceled',
                        })
                    })
            }

            const changeRole = (row:listInt)=> {
                router.push({
                    path: "authority",
                    params: {
                        id: row.roleId,
                        authority: row.authority
                    }
                })
            }

            return {
                ...toRefs(data),
                addRole,
                changeRole
            }
        }
    })
</script>

<style scoped>

</style>