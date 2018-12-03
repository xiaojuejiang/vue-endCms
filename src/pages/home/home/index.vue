<template >
  <div class="home-container">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside
        width="auto"
        class="home-slider"
      >
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <div class="logo">
            <span v-if="isCollapse">云</span>
            <span v-else>云购网</span>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>用户列表
            </el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i>用户列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="home-header">
          <i class="el-icon-tickets icon" @click="isCollapse=!isCollapse"></i>
          <span class="title">电商后台管理系统</span>
          <el-button
            type="text"
            class="logout"
            @click="logoutHandle"
          >退出</el-button>
          <span class="user">你好,{{username}}</span>
        </el-header>
        <!-- 内容区 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script >
import {mapState,mapMutations} from "vuex"
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  created(){
    this.getUsername();
  },
  methods: {
    ...mapMutations(['getUsername']),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logoutHandle(){
      localStorage.removeItem('token')
      this.$router.push({path:'/login'})
    }
  },
  computed:{
    ...mapState(['username'])
  }
};
</script>
<style lang="less" >
.home-container {
  height: 100%;
  .home-slider {
    .logo {
      line-height: 60px;
      font-size: 30px;
      text-align: center;
      height: 60px;
      background-color: #ccc;
    }
    .el-menu {
      border: 0;
    }
  }
  .home-header {
    color: #fff;
    .icon {
      font-size: 28px;
      float: left;
      line-height: 60px;
      cursor: pointer;
    }
    .title {
      font-weight: 700;
    }
    .user {
      float: right;
    }
    .logout {
      float: right;
      height: 60px;
    }
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #e9eef3;
    padding: 20px;
  }
}
</style>
