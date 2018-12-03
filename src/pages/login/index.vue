<template >
  <div class="login-container">
    <el-form
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
          v-model="ruleForm.password"
          placeholder="******"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script >
import { login } from "@/axios/api";
import {mapMutations} from "vuex"
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      if(this.ruleForm.username.trim().length==0||this.ruleForm.password.trim().length==0)return this.$message.error({
        message:"请填写用户名和密码"
      })
      login(this.ruleForm.username, this.ruleForm.password).then(res => {
        // console.log(res)
        if (res.data.meta.status == 200) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          this.$message({
            message: "恭喜你登陆成功",
            type: "success"
          });
          return this.$router.push({ name: "home" });
        }
        this.$message.error({
            message: res.data.meta.msg
          });
      });
    }
  }
};
</script>
<style lang="less" >
.login-container {
  margin: 50px auto;
  width: 500px;
}
</style>
