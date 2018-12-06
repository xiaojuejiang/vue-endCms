<template >
  <div class="userList-container">
    <!-- 面包屑导航 -->
    <el-row class="crumbs">
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <!-- 搜索栏 -->
    <el-input placeholder="请输入内容" class="search">
      <el-button
        slot="append"
        icon="el-icon-search"
      ></el-button>
    </el-input>
    <el-button type="success" plain>添加用户</el-button>
    <!-- 用户列表 -->
  </div>
</template>
<script >
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" >
.el-breadcrumb {
  background-color: #ccc;
  line-height: 40px;
  padding-left: 20px;
  margin-bottom: 20px;
}
.userList-container{
  .search{
    width: 300px;

  }
}
</style>
