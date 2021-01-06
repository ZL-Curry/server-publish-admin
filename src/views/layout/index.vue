<template>
  <el-container class="layout-container">
    <!-- 侧边导航 -->
    <el-aside
      class="aside"
      width="auto"
    >
      <!-- <AppAside /> -->
      <app-aside
        class="aside-menu"
        :is-collapse="isCollapse"
      />
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <!-- 秒 -->
          <i :class="{
            'el-icon-s-fold': isCollapse,
            'el-icon-s-unfold': !isCollapse
          }"
          @click="isCollapse = !isCollapse"></i>
          <span>后台管理系统</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <img src="https://i1.hdslb.com/bfs/face/54b5c9c2ad7f1baff195090bfd6afa365ef20c37.jpg@96w_96h_100Q_1c.webp"  alt="">
            <!-- <img :src="user.photo" width="100" alt=""> -->
            <span>用户昵称</span>
            <!-- <span>{{ user.name }}</span> -->
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <!-- <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span> -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <!-- 子路由出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside.vue'
// import { getUserProfile } from '@/api/user'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      // user: {} // 当前用户登录信息
      isCollapse: false // 侧边菜单默认展开状态
    }
  },
  computed: {},
  watch: {},
  created () {
    // this.loadUserProfile()
  },
  mounted () {},
  methods: {
    // 除去登录接口其他接口必须授权才可以请求
    // 也就是说，除了登录接口，其他接口都需要提供身份令牌
    // loadUserProfile () {
    //   getUserProfile().then(res => {
    //     console.log(res)
    //     // this.user = res.data.data
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style scoped lang="less">
.layout-container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .aside{
    background: #ccc;
  }
  .header{
    // background: #c4c4c4;
    border-bottom: 1px solid #ccc;
    // box-shadow: 0 -5px 0 5px #ccc;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar-wrap{
      display: flex;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
        border: 1px solid #f40;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
  .main{
    background: rgb(238, 237, 237);
  }
  .aside-menu{
    height: 100%;
  }
}
</style>
