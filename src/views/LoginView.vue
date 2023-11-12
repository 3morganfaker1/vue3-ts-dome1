 <template>
     <div class="login-box">
         <h2>admin server </h2>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" class="formClass" label-width="100px ">
             <el-form-item label="username" prop="username">
                 <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item label="password" prop="password">
                 <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item>
                 <el-button class="loginBtn" @click="submitForm(ruleFormRef)">submit</el-button>
                 <el-button class="loginBtn" @click="resetForm ">reset</el-button>
             </el-form-item>
         </el-form>
     </div>
 </template>

 <script lang="ts">
     import {
         defineComponent,
         reactive,
         toRefs,
         ref
     } from 'vue'
     import {
         LoginData
     } from '../type/login'
     import type {
         FormInstance,
     } from 'element-plus'
     import { login } from '../request/api'
     import { useRouter } from 'vue-router'

     export default defineComponent({
         setup() {
             const data = reactive(new LoginData);
             const ruleFormRef = ref < FormInstance > ();
             const resetForm = () => {
                 data.ruleForm.username = '',
                     data.ruleForm.password = ''
             };
             const router = useRouter();
             const rules = {
                 username: [{
                         required: true,
                         message: 'please enter username',
                         trigger: 'blur'
                     },
                     {
                         min: 3,
                         max: 5,
                         message: '长度在 3 到 5 个字符',
                         trigger: 'blur'
                     }
                 ],
                 password: [{
                         required: true,
                         message: 'please enter password ',
                         trigger: 'blur'
                     },
                     {
                         min: 3,
                         max: 6,
                         message: '长度在 3 到 6 个字符',
                         trigger: 'blur'
                     }
                 ],
             }
             const submitForm = (formEl: FormInstance | undefined) => {
                 if (!formEl) return
                 formEl.validate((valid) => {
                     if (valid) {
                        //  console.log('submit!')
                        login(data.ruleForm).then((res)=>{
                            //保存token
                            localStorage.setItem('token', res.data.token);
                            //跳转
                            if(res.data.verifySuccess){
                                router.push('/');
                            }
                        });
                     } else {
                         console.log('error submit!')
                         return false
                     }
                 })
             }
             return {
                 ...toRefs(data),
                 rules,
                 ruleFormRef,
                 resetForm,
                 submitForm
             }
         }
     })
 </script>

 <style lang="scss" scoped>
     .login-box {
         width: 100%;
         height: 100%;
         background: url('../assets/backimg.jpg');
         text-align: center;

         .formClass {
             width: 500px;
             margin: 200px auto;
             background-color: aliceblue;
             padding: 40px;
             border-radius: 20px;
         }

         .loginBtn {
             width: 45%;
         }

         h2 {
             margin-bottom: 5px;
         }
     }
 </style>